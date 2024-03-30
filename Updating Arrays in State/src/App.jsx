import { useState } from "react";
let id= 0;
export default function addElement() {
  const [name, setName] = useState("");
  const [array, setArray] = useState([]);


  return (
    <div>
      <h1>
        <u>Adding Element Into an array</u>
      </h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        onClick={()=>{
            setArray([
                ...array,
                {
                  id:id++,
                  name: name,
                },
              ]);
        }}
      >
        Add
      </button>

      <h3>Element's of array</h3>
                {array.map(item=>(
                    <li key={item.id}>{item.name} 

                    {/* delete element of an array */}
                    <button onClick={()=>setArray(array.filter(a=> a.id!== item.id))}>Delete</button>
                    </li>
                ))}
    </div>
  );
}
