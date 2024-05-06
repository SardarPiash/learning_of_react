import React, { useContext, useState } from "react";
import { TaskDispatchProvider } from "../contex/TaskProviderContex";

export default function InputField({ Task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(Task.text);
  const [checked, setChecked] = useState(Task.done);
  const dispatch = useContext(TaskDispatchProvider);

  return (
    <div>
      <li>
        {isEdit ? (
          <div>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <input
              type="text"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <button
              onClick={() => {
                setIsEdit(false);
                dispatch({
                  type: "edited",
                  task: {
                    id: Task.id,
                    text: editTask,
                    done: checked,
                  },
                });
              }}
            >
              Save
            </button>
            <button>Delete</button>
          </div>
        ) : (
          <div>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            {Task.text}
            <button onClick={(e) => setIsEdit(true)}>Edit</button>
            <button
              onClick={() =>
                dispatch({
                  type: "deleted",
                  ID: Task.id,
                })
              }
            >
              Delete
            </button>
          </div>
        )}
      </li>
    </div>
  );
}
