import React from 'react'

const SearchBox = ({ searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input 
          className='pa3 ba b--green bg-light-green br3'
          type='search' 
          placeholder='search Robots' 
          onChange= {searchChange}
      />
    </div>
    )
}

export default SearchBox;