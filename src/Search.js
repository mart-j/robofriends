import React from 'react'

const Search = ({searchBox}) => {
    return (
        <input onChange={searchBox} type="search"  placeholder="Search Robot" />
    )
}


export default Search