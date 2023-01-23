
import { useState } from 'react'
import Header from './components/Header'
import Tasks from "./components/Tasks"
// ------

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Supermarket',
      day: 'Feb 6th at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'School',
      day: 'Feb 7th at 2:30pm',
      reminder: false
    }
  ])

  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
