import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { TodosContext } from '../App'
import styles from './TodoItem.module.css'


interface TodoDetails {
    id?: any,
    done?: boolean,
    description: string,
}

export function TodoItem(props: TodoDetails) {
    const { todos, setTodos } = useContext(TodosContext)
    function handleDoneTodo() {
        const updated = todos.map((todo: TodoDetails) => {
            if (todo.id == props.id) {
                todo.done = !todo.done
            }
            return todo
        })
        setTodos(updated)
        localStorage.setItem("todos", JSON.stringify(updated))
    }
    function handleDestroyTodo() {
        const updated = todos.filter((todo: TodoDetails) => {
            return todo.id != props.id
        })
        console.log(updated)
        setTodos(updated)
        localStorage.setItem("todos", JSON.stringify(updated))
    }
    return (
        <div className={styles.todoItem}>
            <div className={styles.todoOptions}>
                <input
                    type={"checkbox"}
                    className={styles.todoCheckButton}
                    checked={props.done}
                    onChange={handleDoneTodo}
                ></input>
            </div>
            <div className={styles.todoDescription}>
                {props.description}

            </div>
            <div className={styles.todoOptions}>
                <button
                    className={styles.todoDeleteButton}
                    onClick={handleDestroyTodo}
                >
                    <Trash className={styles.todoTrashIcon} size={20} />
                </button>
            </div>
        </div>
    )
}