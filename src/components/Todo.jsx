const Todo = ({ todo, setTodos, todos, filterTodos}) => {

    const deleteTodoHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id ))
    }

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    } 
    return(
        <div className="todo-n-button">
            <li className= {`todo-item ${todo.completed  ? "completed" : " "} `}>{todo.text}</li>
            <div>
                <button onClick={deleteTodoHandler}>delete</button>
                <button onClick={completedHandler}>Done</button>
            </div>
      
        </div>
    )
}

export default Todo