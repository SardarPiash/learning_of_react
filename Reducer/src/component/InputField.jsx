import React, { useState } from "react";

export default function InputField({ Task, OnEdit, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask,setEditTask]= useState(Task.text);
  const [checked,setChecked]= useState(Task.done);
  
  function EditTask(ID){
   setIsEdit(false)
   const editTask1 = {
    id:ID,
    text:editTask,
    done:checked
   }
   OnEdit(editTask1)
  }
  return (
    <div>
      <li>
        {isEdit ? (
          <div>
            <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
            <input type="text" value={editTask} onChange={(e)=>setEditTask(e.target.value)}/>
            <button onClick={(e)=>EditTask(Task.id)} >Save</button>
            <button>Delete</button>
          </div>
        ) : (
          <div>
            <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)} />
            {Task.text}
            <button onClick={(e)=>setIsEdit(true)}>Edit</button>
            <button onClick={(e)=>onDelete(Task.id)}>Delete</button>
          </div>
        )}
      </li>
    </div>
  );
}
