import { useState } from 'react';

export default function challenge2() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key="L" label="Last name" /> 
        <br /><br />
        <Field key="F" label="First name" />
        <br />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="F" label="First name" /> 
        <br /><br />
        <Field key="L" label="Last name" />
        <br />
        {checkbox}
      </>
    );    
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
