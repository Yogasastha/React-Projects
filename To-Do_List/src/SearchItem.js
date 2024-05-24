import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className="searchForm" onSubmit='handleSearchBar'>
    <label htmlFor="search">Search</label>
    <input type="text" placeholder="Search-Items..."  value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchItem