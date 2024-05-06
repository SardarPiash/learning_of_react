import React, { useContext, useState } from "react";
import { TaskDispatchProvider, TaskProvider } from "../contex/TaskProviderContex";

export default function Addtask() {
    const [text,setText] = useState("")
    const dispatch = useContext(TaskDispatchProvider)
    const tasks = useContext(TaskProvider)
    const nextID = (tasks) => {
      const maxID = tasks.reduce((prev, current) =>
        prev && prev.id > current.id ? prev.id : current.id
      );
      return maxID + 1;
    };
    function handleTextAdd(e){
        setText(e.target.value)
    }
  return (
    <div>
      <h2>Prague itinerary</h2>
      <input placeholder="Add Task" onChange={handleTextAdd} value={text}/>
      <button onClick={()=>dispatch({
      type: "added",
      id: nextID(tasks),
      text: text,
    })}>Add</button>
    </div>
  );
}
