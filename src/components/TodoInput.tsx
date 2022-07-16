import { PlusCircle } from "phosphor-react"
import { HTMLAttributes, useContext, useState } from "react"
import { TodosContext } from "../App"
import styles from "./Todo.module.css"

export function TodoInput() {
    const { todos, setTodos } = useContext(TodosContext)
    const [inputTodoDescription, setInputTodoDescription] = useState("");
    function handleAddTodo(e: any) {
        if (!inputTodoDescription || inputTodoDescription == "") {
            return
        }
        const newTodo = {
            id: Math.random(),
            description: inputTodoDescription,
            done: false
        }
        setTodos([...todos, newTodo])
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
        e?.preventDefault();
    }
    function handleTodoDescription(e: any) {
        setInputTodoDescription(e.target.value)
    }
    return (
        <div className={styles.todoBody}>
            <form className={styles.todoAddArea}>
                <input className={styles.todoInput}
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleTodoDescription}
                    required
                />
                <button className={styles.todoAdd} onClick={
                    handleAddTodo
                }>
                    <span className={styles.todoButtonContent}>
                        <span>Criar</span>
                        <PlusCircle className={styles.todoAddIcon} size={19} />
                    </span>
                </button>
            </form>
        </div>
    )
}