import React from 'react'






const Card = ({ users }) => {
return (
    users.map(user => {
        return (
            <div className="container">
                <img src={`https://robohash.org/${user.id}?size=200x200`}
                    alt="this is an robot" />
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </div>
        )
    })

)


}

export default Card