import { useState } from "react";
import { initialTravelPlan } from "../src/data/data";
import TravelCountry from "./TravelCountry";

export default function TravelPlanMain() {
  const [travelData, setTravelData] = useState(initialTravelPlan);

  const travelPlanetID = travelData[0].childIds;

  return (
    <>
      <ol>
        {travelPlanetID.map((planetID) => (
          <li>
            <TravelCountry
              key={planetID}
              id={planetID}
              travelData={travelData}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
