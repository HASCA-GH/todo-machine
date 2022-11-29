// import logo from './logo.svg';
// import { renderHook } from '@testing-library/react';
import React from 'react'
import { TodoProvider } from '../TodoContext/index.js';
import { AppUI } from './AppUI.js';
// import {useLocalStorage} from '../TodoContext/useLocalStorage'
// import {TodoCounter} from '../TodoCounter';
// import {TodoSearch} from '../TodoSearch'
// import {TodoList} from '../TodoList'
// import {TodoItem} from '../TodoItem'
// import {CreateTodoButton} from '../CreateTodoButton'

// const defaultTodos = [
//   {text: 'Cortar el cesped', completed: false},
//   {text: 'Tomar el curso de Next', completed: false},
//   {text: 'Tomar Coffe', completed: false},
//   {text: 'Salir a correr', completed: true},
// ]


function App() {
  return (
    <TodoProvider>
      <AppUI  />
    </TodoProvider>
    // <>
    //   <TodoCounter 
    //     total={totalTodos} 
    //     completed={completedTodos}/>
    //   <TodoSearch 
    //     searchValue={searchValue} 
    //     setSearchValue={setSearchValue}/>
    //   <TodoList>
    //     {searchedTodos.map(todo => (
    //       <TodoItem 
    //         key={todo.text} 
    //         text={todo.text}
    //         completed={todo.completed}
    //         onComplete={()=>completeTodos(todo.text)}
    //         onDelete={()=>deleteTodo(todo.text)}
    //                     />
    //     ))}
        
    //   </TodoList>
    //   <CreateTodoButton/>
    // </>
  );
}

export default App;
