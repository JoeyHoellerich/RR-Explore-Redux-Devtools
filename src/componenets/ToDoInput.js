import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, removeTodo, clearTodo } from "../features/todoSlice"

export default function ToDoInput() {
    const todoList = useSelector((state) => state.todo)
    const [newTask, setNewTask] = useState("")
    const dispatch = useDispatch()

    const renderItems = todoList.items.map((item, index) => {
        return(<li key={index}>{item}<button onClick={() => dispatch(removeTodo(index))}>Delete</button></li> )
    })

    const createTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTask))
    }

    const clearTodoList = (e) => {
        e.preventDefault()
        dispatch(clearTodo())
    }

    return(
        <div>
            <input type="text" onChange={(e) => setNewTask(e.target.value)}></input>
            <button onClick={(e) => createTodo(e)}>Add To To Do List!</button>
            <button onClick={(e) => clearTodoList(e)}>Clear To Do List</button>
            <ul>{renderItems}</ul>
        </div>
    )
}