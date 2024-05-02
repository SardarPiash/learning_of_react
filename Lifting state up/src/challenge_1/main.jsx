import { useState } from 'react';

//main function
export default function SyncedInputs() {

    const [text, setText] = useState('');

    function handleChange(e) {
      setText(e);
    }
  return (
    <>
      <Input label="First input" handlepass={handleChange} newText={text}/>
      <br /> <br />
      <Input label="Second input" handlepass={handleChange} newText={text}/>
    </>
  );
}


///input function
function Input({ label, handlepass, newText }) {

  function handleChange(e) {
    handlepass(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
      type='text'
        value={newText}
        onChange={handleChange}
      />
    </label>
  );
}
