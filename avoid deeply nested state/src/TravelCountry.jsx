export default function TravelCountry({ id, travelData }) {
  const planteName = travelData[id];
  const countryID = travelData[id].childIds;
  console.log(countryID);

  return (
    <>
      <div>
        {planteName.title} 
        <ol>
          {countryID.length > 0 &&
            countryID.map((country) => (
              <li>
                <TravelCountry
                  key={country}
                  id={country}
                  travelData={travelData}
                />
              </li>
            ))}
        </ol>
      </div>
    </>
  );
}
