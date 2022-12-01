import React from 'react'
import {TodoContext} from '../TodoContext/index.js';
import {TodoHeader} from '../TodoHeader/index.js';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {TodoItem} from '../TodoItem'
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoForm} from '../TodoForm';
import {Modal} from '../Modal'

import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';

const AppUI = () => {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodos, 
    deleteTodo,
    openModal, 
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.lenght) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodos(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
                        />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      ) }
      
      <CreateTodoButton setOpenModal={setOpenModal}/>
    </>
  )
}

export {AppUI}