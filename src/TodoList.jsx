import React, {useState} from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Prepare Lunch", "Walk the Dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    } 

    function onEnterAddTask(e) {
        e.key === 'Enter' && addTask();
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    return (
       <div className='h-screen md:bg-gray-100  py-32 px-5 sm:px-0  text-gray-900 font-sans'>
            <div className='bg-white w-full md:w-[80%] lg:w-[60%] xl:w-[50%] md:m-auto flex flex-col items-center justify-center py-18'>
                <h1 className='text-4xl font-bold mb-7'>Todo List</h1>

                <div className='w-full flex items-center justify-center mb-5'>
                    <input 
                        type="text"
                        placeholder='Enter a Text ...'
                        value={newTask}
                        onChange={handleInputChange}
                        onKeyDown={onEnterAddTask}
                        className='w-[90%] sm:w-[50%] py-2.5 px-4 rounded shadow-[2px_2px_5px_rgb(207_202_202)] focus:outline-0'
                    />
                    <button 
                        className='bg-green-700 text-white w-[10%] py-2.5 rounded-xs cursor-pointer' 
                        onClick={addTask}
                    >
                        Add
                    </button>
                </div>

                <ol className='w-full sm:w-[60%] space-y-3'>
                    {tasks.map((task, index) => (
                        <li 
                            key={index} 
                            className='flex justify-between items-center bg-amber-100 shadow-amber-600 w-full p-4 rounded'
                        >
                            <span className='text-bold'>{task}</span>
                            <div className='space-x-2 flex items-center'>
                                <button 
                                    className='border border-amber-950 px-1.5 py-0.5 text-xl rounded cursor-pointer' 
                                    onClick={() => moveTaskUp(index)}
                                >
                                    👆🏽
                                </button>
                                <button 
                                    className='border border-amber-950 px-1.5 py-0.5 text-xl rounded cursor-pointer' 
                                    onClick={() => moveTaskDown(index)}
                                >
                                    👇🏽
                                </button>
                                <button 
                                    className='bg-amber-700 text-white text-sm py-2 px-4 rounded cursor-pointer' 
                                    onClick={() => deleteTask(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
       </div>
    )
}

export default TodoList