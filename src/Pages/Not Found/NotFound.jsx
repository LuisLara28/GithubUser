import React from 'react'
import "./NotFound.css"
import image from "./Pikachu-png-1-635x6241-removebg.png"


const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 id="not-found-title" className="text-4xl mt-9 font-bold">Error 404: Page Not Found</h1>
            <h2 id="text-h2" className="text-2xl">But Hey!! here's a Pikachu!!!</h2>
            <img src={image} alt="p" className="w-60" />
            
        </div>
    )
}

export default NotFound
