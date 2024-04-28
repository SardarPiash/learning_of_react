import { useState } from "react";

const initialItems = [
  { title: "Sea Food", id: 0 },
  { title: "Water Food", id: 1 },
  { title: "fast Food", id: 2 },
  { title: "Burger Food", id: 3 },
];

export default function Form() {
  const [items, setItems] = useState(initialItems);
  const [itemID, setItemId] = useState(0);

  const selectedItems = items.find((item) => {
    return item.id === itemID;
  });

  function handleTitleChange(e) {
    setItems(
      items.map((item) => {
        if (item.id === itemID) {
          return { ...item, title: e };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <div>
        <div>
          <h1>What's your travel snack?</h1>
        </div>
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <input
                  type="text"
                  value={item.title}
                  style={{ marginBottom: "5px" }}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
                <button
                  style={{ marginLeft: "3px" }}
                  onClick={() => {
                    setItemId(item.id);
                  }}
                >
                  Chosse
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>You Choise:{selectedItems.title} </h3>
        </div>
      </div>
    </>
  );
}
