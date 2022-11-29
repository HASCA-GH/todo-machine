import React from 'react'
import './TodoSearch.css';

import { TodoContext } from '../TodoContext';

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
  const onSearchValueChange = (event)=> {
    setSearchValue(event.target.value)
  }
  return (
    <>
    <input 
      className="TodoSearch" 
      type="text" 
      placeholder='Ingresar el texto...'
      value={searchValue}
      onChange={onSearchValueChange}
    />
    <p>{searchValue}</p>
    </>
  )
}

export {TodoSearch}