import { useContext, useState } from 'react'
import { TodosContext } from './App'
import { TodoItem } from './components/TodoItem'
import styles from './TodosList.module.css'


export function TodosList() {
    const { todos, setTodos } = useContext(TodosContext)
    console.log(todos)
    return (
        <div className={styles.todoList}>
            {todos.map((todo: any) => {
                return <TodoItem key={todo.id} id={todo.id} description={todo.description} done={todo.done} />
            })}
        </div>
    )
}