import { useState } from 'react';
import './App.css';
import DropDown from './Components/DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

// <FontAwesomeIcon icon={faCoffee} />

function App() {

  // states
  const [options, setOptions] = useState('Select')
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <div className="dropdown">
        <button onMouseEnter={() => setShow(true)} >{options} <FontAwesomeIcon icon={faArrowDown} style={{marginLeft: '10px'}}/></button>
        {show ? <DropDown setOptions={setOptions} setShow={setShow} /> : ''}
      </div>
    </div>
  );
}

export default App;
