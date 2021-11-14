import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

//Components
import GithubUser from '../../Components/GithubUser/GithubUser';
import Loader from '../../Components/Loader/Loader';

const Followers = () => {

    //Hooks
    const { user } = useParams();
    //State
    const [followers, setFollowers] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setFollowers([])
        setLoader(true)
        const handleUserFollowers = async () => {
            const response = await fetch(
                `https://api.github.com/users/${user}/followers`
            );
            const result = await response.json();
            setFollowers(result)
            console.log(result);
        }
        handleUserFollowers();
        setLoader(false)
    }, [user])

    return (
        <div>
            <h2 className=" bg-purple rounded-lg p-4 mt-2 text-white absolute left-2 top-0 m-0 font-bold text-xl"><Link to="/">Regresar</Link></h2>
            <h4 className="text-2xl p-8"><span className="font-bold text-peach">{user}</span> Followers</h4>
            
            {followers && followers.length > 0 && !loader ? (

                followers.map(user => (
                    <GithubUser 
                    avatar={user?.avatar_url}                    
                    username={user?.login}
                    key={user?.id}/>
                ))
            ) : <Loader />
            }
        </div>
    )
}

export default Followers
