import { useState } from "react";
import Challenge1 from "./challenge_1/main1";
import Challenge2 from "./challenge_2/main2";
import ContactManager from "./challenge_3/main";

export default function App() {
  return (
    <>
     {/* Challenge-1 */}
     <h3><u>Challenge-1</u></h3>
     <Challenge1 />

     <br /> <br /> <br /> <br />
      {/* Challenge-2 */}
     <h3><u>Challenge-2</u></h3>
     <Challenge2 />

     <br /> <br /> <br /> <br />
     <h3><u>Challenge-3</u></h3>
     <ContactManager />

    </>
  );
}
