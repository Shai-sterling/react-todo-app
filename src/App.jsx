import React, { useState, useEffect } from 'react'
import './App.scss';
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  const [ inputText, setInputText ] = useState("")
  const [ todos, setTodos ] = useState([])
  const [ status, setStatus ] = useState("all")
  const [ filterTodos, setFilterTodos ] = useState([])

  //Run when page refreshs
  useEffect(() => {
    getLocalTodos()
  }, [])

  //Run anytime a todo is added or status changes.
  useEffect(() => {
    filterHandler();
    saveLocalTodos()
  }, [todos, status])


  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break;

    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos)) 
  }

  const getLocalTodos = () => {

    if(localStorage.getItem("todos") === null ){
      localStorage.setItem("todos", JSON.stringify([]))

    } else {

     let todoLocal = JSON.parse(localStorage.getItem("todos"))
     setTodos(todoLocal)

    } 
  }

  return (
    <div className="App">

      <div className="todo-title">
        <h1>Shai's Todo App </h1>
        <p>Typing: { inputText }</p>
      </div>

      <div className="todo-form">

        <Form todos = { todos } setTodos = { setTodos } inputText = { inputText } setInputText = { setInputText }  status = { status }  setStatus = { setStatus } />

        <div className="">
          <TodoList todos = { todos }  setTodos = { setTodos }  filterTodos = {filterTodos }/>
        </div>

      </div>

      

    </div>
  );
}

export default App;
