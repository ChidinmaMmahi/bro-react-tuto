import React, {useState} from 'react'

const Practice = () => {

// ----------------------------------COUNTER-----------------------------------------//
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1)
    }
    function handleDecrement() {
        setCount(count - 1)
    }
    function handleReset() {
        setCount(0)
    }

// ------------------------------------TOGGLE DISPLAY TEXT---------------------------------------//

    const [isDisplayed, setIsDisplayed] = useState(true);
    function toggleDisplay () {
        setIsDisplayed(displayed => !displayed);
    }

// ---------------------------------------CHANGE TEXT ONCLICK------------------------------------//

    const [text, setText] = useState("Click on me to see the real text");
    function showHiddenText() {
        setText(`Haha I got you right there, there's no hidden text`)
    }

// -----------------------------------TODO----------------------------------------//
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    function handleAddTodo() {
        if (task.trim === '') return;

        const newTodo = {
            id: Date.now(),
            value: task,
            isCompleted: false,
        }

        setTodos(t => [...t, newTodo]);
        setTask('');
    };

    function handleRemoveTodo(id) {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos);
    }

    function handleCompleted (id) {
        const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.completed} : todo);
        setTodos(updatedTodos);
    }

// ---------------------------------------------------------------------------//

  return (
    <div>

    {/* // ----------------------------------COUNTER------------------------------------// */}
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div> <br /><br /><br />

    {/* // ----------------------------TOGGLE DISPLAY TEXT-------------------------------// */}

        <div>
            <button onClick={toggleDisplay}>{isDisplayed ? "Hide" : "Show"} Text</button>
            {isDisplayed && <p className='p-text'>I Love Jesus</p>}
        </div><br /><br /><br />

    {/* // ------------------------------CHANGE TEXT ONCLICK------------------------------// */}

        <div>
            <h2 onClick={showHiddenText}>{text}</h2>
        </div>

    {/* // -----------------------------------TODO----------------------------------------// */}
        <div>
            <input type="text" placeholder='Enter Todo' className='new-todo'/>
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <p onClick={() => handleCompleted(todo.id)}>{todo.value}</p>
                        <button onClick={() => handleRemoveTodo(todo.id)}>Removed</button>
                    </li>
                ))}
            </ul>
        </div> 
    </div>
  )
}

export default Practice