// import { useState } from 'react';
// export default function App() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
// /////way-1
//         // setPosition({
//         //     x : e.clientX,
//         //     y : e.clientY
//         // })
// //////way-2
//         // const newObject = {}
//         // newObject.x = e.clientX;
//         // newObject.y = e.clientY;
//         // setPosition(newObject);
// /////way-3
//         setPosition({
//             ...position,
//         x:e.clientX,
//         y:e.clientY
//         })


//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   );
// }



// Another problem
// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleFirstNameChange(e) {
//     setPerson({
//        ...person,
//        ///////object ke dynamic krte gele array syntex e likhte hy
//        [e.target.name] : e.target.value
//     })
//   }

// //   function handleLastNameChange(e) {
// //     setPerson({
// //         ...person,
// //         lastName : e.target.value
// //     })
// //   }

// //   function handleEmailChange(e) {
// //     setPerson({
// //         ...person,
// //         email : e.target.value
// //     })
// //   }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//         name='firstName'
//           value={person.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//         name='lastName'
//           value={person.lastName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//         name='email'
//           value={person.email}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }



/////////////////////////////documentation problem -01

// import { useState } from 'react';

// export default function Scoreboard() {
//   const [player, setPlayer] = useState({
//     firstName: 'Ranjani',
//     lastName: 'Shettar',
//     score: 10,
//   });

//   function handlePlusClick() {
//     setPlayer({
//         ...player,
//         score:player.score+1
//     })
//   }

//   function handleFirstNameChange(e) {
//     setPlayer({
//       ...player,
//       firstName: e.target.value,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPlayer({
//         ...player,
//       lastName: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         Score: <b>{player.score}</b>
//         {' '}
//         <button onClick={handlePlusClick}>
//           +1
//         </button>
//       </label>
//       <label>
//         First name:
//         <input
//           value={player.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={player.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//     </>
//   );
// }


import { useState } from 'react';
import Background from './background.jsx';
import Box from './box.jsx';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    // shape.position.x += dx;
    // shape.position.y += dy;
    const new1 = {...initialPosition, x:initialPosition.x+=dx, y:initialPosition.y+=dy}
    ///const new2 = {...position, position:new1}
    setShape({
        ...shape,
        position:new1
    })
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}



