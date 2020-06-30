import React, {useState} from 'react';
import './App.css';

function App() {
  //let counter = 0;
  const name = 'Mike';
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hello World !</h1>
      <p>salut {name}</p>
      <p className={counter % 2 === 0 ? "pair" : "impair"}>{counter}</p>
      <button 
        onClick={() => {
          console.log("Je clique");
          setCounter(++counter);
          }}
      >
        INCREMENT
      </button>
    </div>
  );
}

export default App;
