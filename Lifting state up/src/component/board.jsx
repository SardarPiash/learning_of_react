import React, { useState } from "react";
import Card from "./card";

export default function Board() {
  const [activeIndex, setIsActiveIndex] = useState(0);

  function handleActiveIndex(index) {
    setIsActiveIndex(index);
  }

  return (
    <div>
      <h2>American International University-Bangladesh</h2>
      <div style={{ border: "3px solid red" }}>
        <Card
          title={"Paid Course"}
          isActive={activeIndex === 0}
          activeIndex={() => handleActiveIndex(0)}
        >
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </Card>
        <Card
          title={"Free Course"}
          isActive={activeIndex === 1}
          activeIndex={() => handleActiveIndex(1)}
        >
          Are you eager to expand your knowledge and skills without breaking the
          bank? Look no further! Our free course offers an incredible
          opportunity to enhance your expertise in [topic/subject].
        </Card>
      </div>
    </div>
  );
}
