import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'
const TodoForm = ()=> {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    
    const {addTodo, setOpenModal} = React.useContext(TodoContext)

    const onChange = (e)=> {
        setNewTodoValue(e.target.value)
    }
    const onCancel = ()=> {
        setOpenModal(false)
    }
    const onSubmit = (e)=> {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit} action=''>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                cols="30" 
                rows="10" 
                placeholder='Escriba un TODO...'>
            </textarea>
            <div className='TodoForm-buttonContainer'>
                <button 
                    type="button" 
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}