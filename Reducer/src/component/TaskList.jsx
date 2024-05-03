import React from "react";
import InputField from "./InputField";

export default function TaskList({Tasks, OnEdit, onDelete}) {
  return (
    <div>
      <ul>
        {Tasks.map(task=>(
            <InputField key={task.id} Task={task} OnEdit={OnEdit} onDelete={onDelete}/>
        ))}
      </ul>
    </div>
  );
}
