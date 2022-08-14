import { useEffect } from 'react'
import { useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  // states
  const [inputText, setINputText] = useState('')
  const [todo, setTodo] = useState([])
  const inputref = useRef(null)

  const [filtered, setFiltered] = useState('all')
  const [finalState, setFinalstate] = useState([])

  //functions
  const inputTexthandler = (e) => {
    setINputText(e.target.value)
  }
  const submithandler = (e) => {
    e.preventDefault()
    if (inputref.current.value !== '' || null) {
      setTodo([
        ...todo,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ])
      setINputText('')
    } else {
      alert('please add your plan ....')
    }
  }

  const handleDelete = (itm) => {
    const reitem = todo.filter((i) => {
      return i.id !== itm.id
    })
    setTodo(reitem)
  }

  const handleTask = (itm) => {
    setTodo(
      todo.map((i) => {
        if (i.id === itm.id) {
          return { ...i, completed: !i.completed }
        } else {
          return i
        }
      }),
    )
  }

  const filterHandler = (e) => {
    setFiltered(e.target.value)
  }

  //
  const finalStateHandler = () => {
    switch (filtered) {
      case 'completed':
        setFinalstate(todo.filter((i) => i.completed === true))
        break
      case 'uncompleted':
        setFinalstate(todo.filter((i) => i.completed === false))
        break
      default:
        setFinalstate(todo)
        break
    }
  }

  //save to local
  const saveLocalstorage = () => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }
  const getLocalStorageTodo = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todolocal = JSON.parse(localStorage.getItem('todos'))
      setTodo(todolocal)
    }
  }

  //run once for get todo
  useEffect(() => {
    getLocalStorageTodo()
  }, [])

  useEffect(() => {
    finalStateHandler()
    if (todo.length !== 0) saveLocalstorage()
  }, [todo, filtered])

  return (
    <div className="App">
      <header>
        <h1>Tsh's Todo List</h1>
      </header>
      <Form
        onChange={inputTexthandler}
        onClickbtn={submithandler}
        inputref={inputref}
        inputText={inputText}
        onFilter={filterHandler}
      />
      <TodoList
        todo={todo}
        deletbtn={handleDelete}
        compTask={handleTask}
        finalState={finalState}
      />
    </div>
  )
}

export default App
