import { useEffect, useState } from 'react'
import { AddToDo } from './components/add-todo'
import { List } from './components/list-to'
import axios from 'axios'
import { FilterPanel } from './components/filter-todo'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filterType, setFilterType] = useState('all')
  const deleteNotify = (todo) => toast("deleted todo id:" + todo.name)

  useEffect(() => {
    axios
      .get("http://localhost:3004/todos")
      .then(res => setTodos(res.data))
  }, [])

  const filterToDo = () => {
    if (filterType === 'active') {
      return todos.filter(item => !item.completed)
    } else if (filterType === 'completed') {
      return todos.filter(item => item.completed)
    }
    return todos
  }

  const handleAdd = (todo) => {
    setTodos([...todos, {...todo, completed:false}])
  }

  const changeState = (todo) => {
    const found = todos.find(elm => elm.id === todo.id)
    found.completed = !found.completed
    setTodos([...todos])
  }

  const deleteTodo = (todo) => {
    axios
    .delete(`http://localhost:3004/todos/${todo.id}`)
    .then(res => {
      setTodos([...todos.filter(item => item.id !== todo.id)])
      deleteNotify(todo)
    })
  }

  return (
    
    <div className="min-h-screen bg-gray-900 text-white">
      

      <ToastContainer />
      <AddToDo onAdd={handleAdd} />
      <FilterPanel onSetFilter={setFilterType}/>
      <List todos={filterToDo()} onChange ={changeState} onDelete={deleteTodo}/>
    </div>
  )


}

export default App
