import React from 'react'



const ReposCard = ({key, name}) => {
    return (
        <div className="repos-container  ">
            <div className="repos-card  bg-cream shadow-md w-48 h-40 m-4 ">
                
                <h3 className="font-bold md:text-lg self-center">{name}</h3>
                    
                
            </div>
        </div>
    )
}

export default ReposCard
