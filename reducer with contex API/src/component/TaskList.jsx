import React, { useContext } from "react";
import InputField from "./InputField";
import { TaskProvider } from "../contex/TaskProviderContex";

export default function TaskList() {
  const Tasks = useContext(TaskProvider);
  return (
    <div>
      <ul>
        {Tasks.map(task=>(
            <InputField key={task.id} Task={task} />
        ))}
      </ul>
    </div>
  );
}
