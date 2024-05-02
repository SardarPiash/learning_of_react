import { useState } from 'react';

export default function Challenge1() {
  const [showHint, setShowHint] = useState(false);

  {showHint && <p><i>Hint: Your favorite city?</i></p>}


    return (
      <div>
        {showHint && <p><i>Hint: Your favorite city?</i></p>}
        <Form />
        <br />
        {showHint ? (
            <button onClick={() => {
                setShowHint(false);
              }}>Hide hint</button>
        ):(
            <button onClick={() => {
                setShowHint(true);
              }}>Show hint</button>
        )}
        
      </div>
    );
}



function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
