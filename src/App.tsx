import { Container } from 'react-bootstrap'
import './App.css'
import TaskBoard from './components/TaskBoard'
import { Task } from './types/Task'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'


const taskData = [
  {
    title: "Boy Some more flare",
    description: " HASHAH LOREM İPSUM DOLAR",
    status: "Todo",
    assignee: "Thony Chane",
  },

  {
    title: "Boy Some more flare",
    description: " HASHAH LOREM İPSUM DOLAR",
    status: "Done",
    assignee: "James Chane",
  },
  {
    title: "Boy - flare",
    description: " HASHAH LOREM İPSUM DOLAR",
    status: "Done",
    assignee: "Dont Chane",
  },
  {
    title: "Boy Some more flare",
    description: " HASHAH LOREM İPSUM DOLAR",
    status: "Done",
    assignee: "Gary Chane",
  },

  {
    title: "Boy Some more flare",
    description: " HASHAH LOREM İPSUM DOLAR",
    status: "Done",
    assignee: "Gary Chane",
  },
  {
    title: "Boy - flare",
    description: " HASHAH LOREM İPSUM DOLAR",
    status: "Done",
    assignee: "Dont Chane",
  }


]


const initialTasks: Task[] = [];

taskData.forEach((task) => {
  initialTasks.push({ ...task, id: uuidv4() })
})


function App() {

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <Container>
      <h1 className='text-center '>Task Management</h1>
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </Container>
  )
}

export default App;
