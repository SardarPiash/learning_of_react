import { useState } from "react";

export default function App() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "name",
    },
  ]);

function handleAddNewInput(e) {
    
    setInputs([
        ...inputs,
        {
            id: inputs[inputs.length-1].id +1,
            label: "name"
        }
    ])
}

  return (
    <>
      {inputs.map((input) => (
        <div key={input.id} style={{ marginBottom: "5px"}}>
          <input type="text" placeholder={input.label}/>
        </div>
      ))}

      <button style={{ marginTop: "5px" }} type="submit" onClick={handleAddNewInput}>
        Add More Input's
      </button>
      <button style={{ marginTop: "5px", marginLeft: "10px"}} type="submit" onClick={handleAddNewInput}>
        Save
      </button>
    </>
  );
}
