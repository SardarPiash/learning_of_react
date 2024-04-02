import { useState } from "react";
let id= 0;
let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 250 },
  { id: 1, type: 'square', x: 150, y: 250 },
  { id: 2, type: 'circle', x: 250, y: 250 },
];
export default function addElement() {
  const [name, setName] = useState("");
  const [array, setArray] = useState([]);
  const [shapes,setShape] = useState(initialShapes);

  function handleClick(){
    setShape(
      shapes.map((shape)=>{
        if(shape.type === "circle"){
          
          return {
            ...shape,
            y:shape.y+50
          }
          
        }else{
          return shape;
           
        }
      })
    ) 
    
    ///////////orrrrrrrrrr
    
    //   const newShape=shapes.map((shape)=>{
    //     if(shape.type === "circle"){
          
    //       return {
    //         ...shape,
    //         y:shape.y+50
    //       }
          
    //     }else{
    //       return shape;
           
    //     }
    //   })
    // setShape(newShape);
    
  }

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



                <div>
                <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
                </div>
    </div>
  );
}
