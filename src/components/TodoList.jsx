import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filterTodos }) => {
    
    const todoItems = filterTodos.map( todo => <Todo key={todo.id} todo = { todo } setTodos = { setTodos } todos ={ todos } filterTodos = { filterTodos } /> )
    
    return (
        
            <ul className="todo-items">
                { todoItems }
            </ul>
    
    )

}

export default TodoList


