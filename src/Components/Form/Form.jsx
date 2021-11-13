import React from 'react'

import "./Form.css"

const Form = ({ handleUserName, handleSearchUser}) => {
    return (
        <div>
            <form className=" flex m-4 justify-center" onSubmit={e => handleSearchUser(e)}>
                <input type="text" placeholder="Type a user" className="input-box text-xs text-grey w-32 md:w-96 lg:mt-20 lg:h-16 lg:w-1/2 lg:text-xl" onChange={({ target }) => handleUserName(target)} />
                <input type="submit" value="Search" className="submit bg-violet font-bold text-white p-2 rounded-r-lg md:px-4 md:w-32 hover:bg-purple lg:mt-20" />
            </form>
        </div>
    )
}

export default Form
