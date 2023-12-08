import { useState } from "react"
import {Task} from "../../interfaces/AppInterface"
import { nanoid } from "nanoid"
import TaskCard from "./TaskCard"

export default function ToDoList(){
    const [taskList, setTaskList] = useState([] as Task[])

  const [newTask, setNewTask] = useState('')

  const addNewTask = (newTask: string) => {
    if (newTask !== '') {
      const task: Task = {
        id: nanoid(),
        content: newTask,
        statut: false
      }

      setTaskList([...taskList, task])
      setNewTask('')
    }

  }

  const completeTask = (taskToComplete: Task): void => {
    const targetTask = taskList.find((task) => task.id === taskToComplete.id) as Task
    targetTask.statut = !targetTask.statut

    setTaskList([...taskList])
  }

  const removeTask = (taskToRemove: Task): void => {
    const targetTask = taskList.find((task) => task.id === taskToRemove.id) as Task
    setTaskList(taskList.filter((task) => task != targetTask))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, newTask:string):void => {
    if (event.key === "Enter") {
      addNewTask(newTask)
    }
  }

  return (
    <main className="todo-list">
      <h1>React To-Do List</h1>
      <hr />
      <div className='input-wrapper'>
        <input placeholder='Add a new Task' type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} onKeyDown={(e) => handleKeyDown(e, newTask)} />
        <button onClick={() => { addNewTask(newTask) }}>+</button>
      </div>
      <ul>
        {
          taskList.map((taskItem) => (
            <TaskCard task={taskItem} completeTask={() => completeTask(taskItem)} removeTask={() => removeTask(taskItem)}></TaskCard>
          )).reverse()
        }
      </ul>
    </main>
  );
}