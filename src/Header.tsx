import styles from './Header.module.css'
import logo from './assets/todo.svg'
export function Header() {
    return (
        <>
            <div className={styles.mainHeader}>
                <img src={logo} />
            </div>
        </>
    )
}