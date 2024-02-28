import React, { useContext, useRef } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC=() =>  {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const onAddTodo = useContext(TodosContext).addTodo

    function handleFormSubmit (event: React.FormEvent){
        event.preventDefault()
        const enteredText = todoTextInputRef.current!.value

        if(enteredText.trim().length === 0) {
            //thorw an error
            return
        }
        onAddTodo(enteredText)
      
    }

   

    return <form onSubmit={handleFormSubmit} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input ref={todoTextInputRef} id="text" type="text" />
        <button>Add Todo</button>

    </form>
}

export default NewTodo;