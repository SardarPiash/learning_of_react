import React, { useState } from "react";

export default function Addtask({onAddTask}) {
    const [text,setText] = useState("")

    function handleTextAdd(e){
        setText(e.target.value)
    }
  return (
    <div>
      <h2>Prague itinerary</h2>
      <input placeholder="Add Task" onChange={handleTextAdd} value={text}/>
      <button onClick={(e)=>onAddTask(text)}>Add</button>
    </div>
  );
}
