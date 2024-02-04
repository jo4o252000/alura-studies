import React, { useState } from "react";
import Form from '../components/Form';
import Lista from '../components/List';
import style from './app.module.scss';
import StopWatch from '../components/Stopwatch';
import { ITasks } from "../types/task";



function App() {
  const [tasks, setTask] = useState<ITasks[] | []>([])
  const [selected, setSelected] =useState<ITasks>()

  function selectedTask(taskIsSelected:ITasks){
    setSelected(taskIsSelected)
    setTask(oldTask => oldTask.map(task => ({...task, isSelected: task.id === taskIsSelected.id ? true : false })))
  }

  function finallyTask(){
    if(selected){
      setSelected(undefined)
      setTask(oldTask => oldTask.map(task => {
        if(task.id === selected.id){
          return {...task, isSelected:false, completed:true}
        } 
        return task
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <StopWatch selected={selected} finallyTask={finallyTask}/>
      <Lista tasks={tasks} selectedTask={selectedTask}/>
    </div>
  );
}

export default App;
