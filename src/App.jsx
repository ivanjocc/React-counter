import { React, useState } from 'react';
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Prueba Contador botones</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iure illum aliquam commodi nulla! Vitae fuga aliquam veniam eligendi architecto adipisci sapiente magnam repellendus vel saepe ad, soluta labore ut optio rerum? Sequi mollitia officia cupiditate iusto aspernatur voluptates quo dicta laboriosam ad vero, quia itaque nisi? Amet ea quibusdam quis rerum adipisci aperiam voluptatum numquam, debitis, accusamus, distinctio explicabo reiciendis nam! Sed rerum dolorum, numquam neque molestias ratione dolor veniam voluptatibus deserunt voluptate enim ipsam dolore aliquam rem similique soluta maiores harum! Et quas, quo, accusantium velit vitae aut maiores asperiores quasi perspiciatis non, delectus voluptas possimus eos excepturi.</p>

      <span>
        {counter}
      </span>

      <div className="botones">
        <button onClick={() => {
          setCounter(counter - 1)
          }}>Restar (-)
        </button>

        <button onClick={() => {
          setCounter(counter + 1)
          }}>Sumar (+)
        </button>
      </div>
    </div>
  );
};

export default App;