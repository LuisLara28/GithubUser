import React from 'react'
import {Link} from 'react-router-dom'

//Styles
import"./GithubUser.css"

const GithubUser = ({key, name, username, followers, following, repos, avatar, bio}) => {
    return (
        <div className="flex justify-center text-sm">
            <div className="github-user-card flex flex-col  w-60 rounded-lg bg-cream m-4 md:w-2/3 md:h-60 md:flex-row md:rounded-full lg:h-96 lg:w-1/2 ">
                <div className="   h-20 w-40 self-center mt-7 mb-5 md:justify-self-start md:w-1/3 md:self-center md:h-52 md:w-32 md:border-0 lg:h-64 lg:ml-10">
                    <img src={avatar} alt="" className=" rounded-full w-40 md:w-4/5 md:justify-center md:ml-14 md:mt-8 lg:w-64 lg:mt-0 " />
                </div>
                <div className="flex flex-col md:w-2/3 md:justify-center md:p-6 md:mr-5 ">
                    <h3 className="text-peach font-extrabold md:text-xl md:mt-5 lg:text-3xl lg:mb-4">{username}</h3>
                    <h3 className="font-bold md:text-lg lg:text-3xl">{name}</h3>
                    <p className="mt-6 mx-8 text-xs md:text-base md:font-semibold md:mt-2 lg:text-2xl">{bio}</p>
                    <div className="Information flex justify-evenly my-8 md:mt-4 ">
                        <div className="repos-sect w-1/3">
                            <h6 className="font-bold text-violet md:text-base lg:text-xl"><Link to={`/repos/${username}`}>Repos</Link></h6>
                            <h6 className="font-bold text-peach text-xs md:text-base lg:text-xl">{repos}</h6>
                        </div>
                        <div className="followers-sect w-1/3">
                            <h6 className="font-bold text-violet md:text-base lg:text-xl"><Link to={`/followers/${username}`}>Followers</Link></h6>
                            <h6 className="font-bold text-peach text-xs md:text-base lg:text-xl">{followers}</h6>
                        </div>
                        <div className="following-sect w-1/3">
                            <h6 className="font-bold text-violet md:text-base lg:text-xl">Following</h6>
                            <h6 className="font-bold text-peach text-xs md:text-base lg:text-xl">{following}</h6>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default GithubUser
