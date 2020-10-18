import React from 'react'
import './Card.css'






const Card = ({ users }) => {
return (
    users.map(user => {
        return (
            <div key={user.id} className="container" >
                <img src={`https://robohash.org/${user.id}?size=200x200`}
                    alt="this is an robot" />
                    <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                </div>
            </div>
        )
    })

)


}

export default Card