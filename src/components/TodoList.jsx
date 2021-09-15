import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filterTodos }) => {
    
    const todoItems = filterTodos.map( todo => <Todo key={todo.id} todo = { todo } setTodos = { setTodos } todos ={ todos } filterTodos = { filterTodos } /> )
    
    return (
        <div className="todo-items">
            <ul>
                { todoItems }
            </ul>
        </div>
    )

}

export default TodoList


