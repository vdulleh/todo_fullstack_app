import './App.css'

function App() {
  const todoTasks = [
    'go to the gym',
    'Buy groceries',
    'finish the project',
    'call mom',
    'Read a book',
    'plan the weekend trip'
  ];
  return (
    <><>
      <h2>ToDo App</h2>
    </><ul>
        {
          todoTasks.map((task, index) => (<li key={index}>{task}</li>))
        }
      </ul></>
  )
}

export default App
