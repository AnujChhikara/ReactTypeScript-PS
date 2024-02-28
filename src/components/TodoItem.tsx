import React from "react";
import clases from './TodoItem.module.css'



const TodoItem: React.FC<{ text: string; removeTodo: () => void }> = (props) => {
    
    return <li className={clases.item}>
{props.text}

<button onClick={props.removeTodo} >Remove Todo</button>
    </li>
}

export default TodoItem;