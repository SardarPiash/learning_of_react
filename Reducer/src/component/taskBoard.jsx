import React, { useReducer, useState } from "react";
import Addtask from "./addtask";
import TaskList from "./TaskList";
import { initialTasks } from "../data/data";
import TaskReducer from "../reducer/taskReducer";

export default function TaskBoard() {
  const [tasks,dispatch]= useReducer(TaskReducer,initialTasks);

  ///calculate the nextID use reduce function......
  const nextID=(tasks)=>{
    const maxID =tasks.reduce((prev,current)=>
      prev && prev.id> current.id ? prev.id : current.id
    )
    return maxID + 1
      
  }

  ///handle add new task........
  function handleAddTask(text){
    
    dispatch({
        type:"added",
        id:nextID(tasks),
        text:text
    })

    // const addNewTask= [
    //   ...tasks,
    //   {
    //     id:nextID(tasks),
    //     text:text,
    //     done:false
    //   }
    // ]
    // setTasks(addNewTask);
  }


  function handleEditTask(Task){
    dispatch(
      {
        type:"edited",
        task:Task, 
      }
    )
  //  const EditTask = (tasks.map(task=>task.id === Task.id ? Task : task))
  //  setTasks(EditTask);
  }

  function handleDelte(ID){
    dispatch(
      {
        type:"deleted",
        ID:ID,
      }
    )
  //  const afterDeletedTask= tasks.filter(task=> task.id !== ID)
  //  setTasks(afterDeletedTask);
  }
  return (
    <div>
      <Addtask onAddTask={handleAddTask}/>
      <TaskList Tasks={tasks} OnEdit={handleEditTask} onDelete={handleDelte}/>
    </div>
  );
}
