import './App.module.css'
import { Header } from './Header'
import { TodoInput } from './components/TodoInput'
import { TodoBody } from './TodoBody'
import { createContext, useEffect, useState } from 'react'
interface TodoDetails {
  done?: boolean,
  description: string,
}
export const TodosContext = createContext<any>([])
function App() {
  const [todos, setTodos] = useState<TodoDetails[]>([])
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")!) || [])
  }, [])
  return (
    <>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <Header />
        <TodoInput />
        <TodoBody />
      </TodosContext.Provider>
    </>
  )
}

export default App
