import { useState } from 'react'
import './App.css'
import ToDOform from './components/ToDoForm';

function App() {
  const [todoTasks, setTodoTasks] = useState([
    'go to the gym',
    'Buy groceries',
    'finish the project',
    'call mom',
    'Read a book',
    'plan the weekend trip'
  ]);

  function handleAddTask(newtask) {
    console.log("New task added:", newtask);
    setTodoTasks([newtask, ...todoTasks]);
  }


  return (
    <>
      <h2>ToDo App</h2>

      <ToDOform handleAddTask={handleAddTask} />

      <ul>
        {
          todoTasks.map((task, index) => (<li key={index}>{task}</li>))
        }
      </ul></>
  )
}

export default App
