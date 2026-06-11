import { useState } from 'react' // Importing the useState hook from React to manage state in the App component.
import './App.css' // Importing the CSS file for styling the App component.
import ToDOform from './components/ToDoForm'; // Importing the ToDOform component from the components directory. This component will be used to add new tasks to the to-do list.
import EditToDoForm from './components/EditiToDoForm'; // Importing the EditToDoForm component from the components directory. This component will be used to edit existing tasks in the to-do list.

function App() { // Defining the App component, which is the main component of the application.
  const [todoTasks, setTodoTasks] = useState([
    {
      id: 1, // In a real application, you might want to use a more robust method for generating unique IDs, such as UUIDs or a database-generated ID.  
      task: 'go to the gym',
      isEditing: false
    },
    {
      id: 2,
      task: 'Buy groceries',
      isEditing: false
    },
    {
      id: 3,
      task: 'finish the project',
      isEditing: false
    },
    {
      id: 4,
      task: 'call mom',
      isEditing: false
    },
    {
      id: 5,
      task: 'Read a book',
      isEditing: false
    },
    {
      id: 6,
      task: 'plan the weekend trip',
      isEditing: false
    }

  ]);

  function handleAddTask(newtask) {
    console.log("New task added:", newtask); // This will log the new task to the console for debugging purposes.
    setTodoTasks([{
      id: todoTasks.length + 1, // This is a simple way to generate a unique ID, but in a real application, you might want to use a more robust method.
      task: newtask,
      isEditing: false

    }, ...todoTasks]);
  }

  function handleUpdateTask(updatedTask) {
    console.log("Task updated:", updatedTask);
    const updatedTasks = todoTasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask; // This will update the task with the new values passed from the EditToDoForm component. The spread operator is not needed here since we are returning a new object with the updated values.
      }
      return task;
    });
    setTodoTasks(updatedTasks);
  }



  function currentTask(task) {
    const updatedTasks = todoTasks.map(t => {
      if (t.id === task.id) {
        return {
          ...t, isEditing: true
        }; // This will set the isEditing property of the task to true, allowing the user to edit the task when they click on it.
      }
      return t;
    });

    setTodoTasks(updatedTasks); // This will update the state of the todoTasks with the updated tasks, which will trigger a re-render of the component and allow the user to see the edit form for the selected task.
  }

  function deleteTask(task) {
    const updatedTasks = todoTasks.filter(t => {
      return t.id !== task.id;
    });
    setTodoTasks(updatedTasks);
  }

  return (
    <>
      <h2>ToDo App</h2>

      <ToDOform handleAddTask={handleAddTask} />

      <ul>
        {
          todoTasks.map((task, index) => (<li key={index}>
            {
              task.isEditing ? (<EditToDoForm handleUpdateTask={handleUpdateTask} task={task} />) : <div>
                <span onClick={() => currentTask(task)}>{task.task}</span>
                {" "}<button onClick={() => deleteTask(task)}>Delete</button>
              </div>
            }
          </li>))
        }
      </ul ></>
  )
}

export default App
