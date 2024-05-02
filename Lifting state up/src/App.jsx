import { useState } from "react";
import Board from "./component/board";
import SyncedInputs from "./challenge_1/main";
import FilterableList from "./challenge_2/searchBoard";
import Challenge_3 from "./challenge_3/main3";

export default function App() {
  return (
    <>
     {/* <Board /> */}

     {/* Challenge-1 */}
     <h3><u>Challenge-1</u></h3>
     <SyncedInputs />
      <br /> <br /> <br /> <br />
     {/* Challenge-2 */}
     <h3><u>Challenge-2</u></h3>
     <FilterableList />

     <br /> <br /> <br /> <br />
     {/* Challenge-3 */}
     <h3><u>Challenge-3</u></h3>
     <Challenge_3 />
    </>
  );
}
