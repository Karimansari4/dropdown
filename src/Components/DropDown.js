import React, { useState } from 'react'
import '../css/DropDown.css'

function DropDown({ setOptions, setShow}) {

  // states
  const [dropdown, setDropdown] = useState([{"name": 'Select'},{"name": 'Yes'}, {"name": 'Probably No'}])
  // const [dropdown, setDropdown] = useState({"options": [{"name": "Select"}, {"name": 'Yes'}, {"name": "Probably No"}]})
  // const [dropdown, setDropdown] = useState({"options": [{"name": "Select"}, {"name": 'Yes'}, {"name": "Probably No"}]})

  // onClick event for changing states value
  const onchange = (evt) => {
    setOptions(evt.target.innerText)
    setShow(false)
  }

  return (
    <div>
      <div className="dropdown-options">
          <ul>
            {dropdown.map((item, ind) => {
              return(
                <li key={ind} onClick={onchange}> {item.name} </li>
              )
            })}
          </ul>
        </div>
    </div>
  )
}

export default DropDown