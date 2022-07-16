import { Notepad } from 'phosphor-react'
import { useContext } from 'react'
import { TodosContext } from './App'
import { EmptyTodo } from './EmptyTodo'
import styles from './TodoBody.module.css'
import { TodosList } from './TodosList'

export function TodoBody() {
    const { todos, setTodos } = useContext(TodosContext);
    const x = []
    return (
        <div className={styles.todoBody}>

            <div className={styles.todoListHeader}>
                <div className={styles.todoTasksInfo}>

                    <span className={styles.todoCreatedTasks}>Tarefas criadas</span>
                    <small className={styles.todoTasksInfoCount}>{todos.length}</small>
                </div>
                <div className={styles.todoTasksInfo}>

                    <span className={styles.todoFinishedTasks}>Concluídas</span>
                    <small className={styles.todoTasksInfoCount}>{!todos.length ? 0 : todos.filter((todo: any) => todo.done).length + " de " + todos.length}</small>
                </div>
            </div>
            <div className={styles.todoDivisor}></div>
            <div className={styles.todoList}>
                {todos.length != 0 && <TodosList />}
                {todos.length == 0 && < EmptyTodo />}

            </div>
        </div>
    )
}