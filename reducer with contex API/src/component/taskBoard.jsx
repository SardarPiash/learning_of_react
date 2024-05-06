import React, { useReducer, useState } from "react";
import Addtask from "./addtask";
import TaskList from "./TaskList";
import { initialTasks } from "../data/data";
import TaskReducer from "../reducer/taskReducer";
import {
  TaskDispatchProvider,
  TaskProvider,
} from "../contex/TaskProviderContex";

export default function TaskBoard() {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);
  return (
    <div>
      <TaskProvider.Provider value={tasks}>
        <TaskDispatchProvider.Provider value={dispatch}>
          <Addtask />
          <TaskList />
        </TaskDispatchProvider.Provider>
      </TaskProvider.Provider>
    </div>
  );
}
