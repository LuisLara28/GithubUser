import React, { useState } from 'react'

//Components
import Form from '../../Components/Form/Form'
import GithubUser from '../../Components/GithubUser/GithubUser'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'

const Home = () => {

    //States
    const [userName, setUserName] = useState("")
    const [userInformation, setUserInformation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    //Functions
    const handleUserName = ({ value }) => {
        setUserName(value)
    }
    const handleSearchUser = async e => {
        e.preventDefault();

        try {
            setIsLoading(true)
            setUserInformation(null)
            const API = `https://api.github.com/users/${userName}`
            const response = await fetch(API)
            const result = await response.json();

            if (result.message === "Not Found") {
                setError(true)
            } else {
                setUserInformation(result)
            }
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }


    return (
        <div className="github-app-container">
            <div>
                <Header />
                <Form handleUserName={handleUserName} handleSearchUser={handleSearchUser} />

                {
                    userInformation ?
                        <GithubUser
                            key={userInformation.id}
                            name={userInformation.name}
                            username={userInformation.login}
                            followers={userInformation.followers}
                            following={userInformation.following}
                            repos={userInformation.public_repos}
                            avatar={userInformation.avatar_url}
                            bio={userInformation.bio}
                        /> : error ? (<h1 className="mt-14 text-4xl font-bold">Error: User Not Found</h1>) : null
                }

                {isLoading && <Loader />}
            </div>
        </div>
    )
}

export default Home
