import { useState } from "react";

// function Button() {
//   const [number, setNumber] = useState(0);

//   function nn() {
//     setNumber(number + 1);
//   }
//   return (
//     <>
//     <p>{number}</p>
//       <button onClick={nn}>+3</button>
//     </>
//   );
// }

function App() {
  const [number, setNumber] = useState(0);

  // function nn() {
  //   setNumber(number + 1);
  // }

  return (
    <div>
      <p>{number}</p>

      {/* updater function */}
      <button
        onClick={() => {
          setNumber(n=>n+1);
          setNumber(n=>n+1);
          setNumber(n=>n+1);
        }}
      >
        +3
      </button>

      <button
        onClick={() => {
          setNumber(number+1);
          setNumber(number+1);
          setNumber(number+1);
        }}
      >
        +3
      </button>
      {/* <Button  />
      <Button  /> */}
    </div>
  );
}

export default App;
