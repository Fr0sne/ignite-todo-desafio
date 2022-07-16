import { Notepad } from "phosphor-react";
import styles from './EmptyTodo.module.css'

export function EmptyTodo() {
    return (
        <div>
            <Notepad className={styles.noTodoIcon} size={56} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}