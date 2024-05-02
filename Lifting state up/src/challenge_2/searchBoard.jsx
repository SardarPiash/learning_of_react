import { useState } from 'react';
import { foods, filterItems } from './data';

export default function FilterableList() {
    const [query, setQuery] = useState('');

    function handleChange(e) {
      setQuery(e);
    }
    const filterItemss = filterItems(foods, query)
  return (
    <>
      <SearchBar handleSearch={handleChange} value={query}/>
      <hr />
      <List items={filterItemss} />
    </>
  );
}

function SearchBar({value, handleSearch}) {

    function handleChange(e) {
        handleSearch(e.target.value);
      }

  return (
    <label>
      Search:{' '}
      <input
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
