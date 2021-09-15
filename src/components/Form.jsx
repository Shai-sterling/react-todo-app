const Form = ({ inputText, setInputText, setTodos, todos, status, setStatus  }) => {


    const inputTextHandler = (e) => {
        setInputText(e.target.value)

    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText(" ")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form className="form" id="form">
            <input  value ={ inputText } type = "text"  onChange = { inputTextHandler } />
            <button onClick ={ submitTodoHandler } type = "submit">add a todo</button>

            <div className = "form-selection" id = "form-selection" >
                <select onChange = { statusHandler } name = "" id = "">
                    <option value="all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>
                </select>   
            </div>
        </form>

    )

}



export default Form