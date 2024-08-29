import { useState } from 'react';
import { data } from './data';
import Dogs from './Dogs';
import './App.css';

function App() {
  const[dogs, setDogs] = useState(data);
  return (
    <div >
    <Dogs anyDog = {dogs}/>
    </div>
  );
}

export default App;
