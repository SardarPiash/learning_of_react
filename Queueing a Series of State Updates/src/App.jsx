 import { useState } from "react";

// // function Button() {
// //   const [number, setNumber] = useState(0);

// //   function nn() {
// //     setNumber(number + 1);
// //   }
// //   return (
// //     <>
// //     <p>{number}</p>
// //       <button onClick={nn}>+3</button>
// //     </>
// //   );
// // }

// function App() {
//   const [number, setNumber] = useState(0);

//   // function nn() {
//   //   setNumber(number + 1);
//   // }

//   return (
//     <div>
//       <p>{number}</p>

//       {/* updater function */}
//       <button
//         onClick={() => {
//           setNumber(n=>n+1);
//           setNumber(n=>n+1);
//           setNumber(n=>n+1);
//         }}
//       >
//         +3
//       </button>
//       <hr />
//       <button
//         onClick={() => {
//           setNumber(number+1);
//           setNumber(number+1);
//           setNumber(number+1);
//         }}
//       >
//         +1
//       </button>
//       {/* <Button  />
//       <Button  /> */}
//       <hr/>
//       {/* updater vfunction should be pure always */}
//       <button onClick={()=>{
//         setNumber(number+1);
//         setNumber(n=>n+1);
//         setNumber(43);
//       }}>Press</button>
//     </div>
//   );
// }

// export default App;


// documentation problem-1

// export default function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   //when click twice on the button at a time, it calls the handleClick
//   //function 2 times and all setter are called two times with 
//   //delay 3 sec
//   async function handleClick() {
//     setPending(pending + 1);
//     await delay(3000);
//     setPending(p=>p-1);
//     setCompleted(c=>c+1);
//   }

//   return (
//     <>
//       <h3>
//         Pending: {pending}
//       </h3>
//       <h3>
//         Completed: {completed}
//       </h3>
//       <button onClick={handleClick}>
//         Buy     
//       </button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }


