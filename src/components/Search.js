import React from 'react'
import './Search.css'

const Search = ({searchBox}) => {
    return (
        <div style={{textAlign: 'center'}}>
        <input onChange={searchBox} type="search"  placeholder="Search Robot" />
        </div>
    )
}


export default Search