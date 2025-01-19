
import React, { useState, useContext } from 'react';
import { AppContext } from './ContextApi';

export const Modal = ({ handleClose }) => {
  const [groupName, setGroupName] = useState('');
  const [colorCode, setColorCode] = useState('');
  const { HandleAddGroupData } = useContext(AppContext); // Access addGroup from context
 console.log(colorCode,'colorCode')
  const handleCreate = () => {
    const newGroup = {
      name: groupName,
      color: colorCode,
    };
   
    HandleAddGroupData(newGroup); // Add group to context (array)
    if (!groupName || !colorCode) {
      alert(' Color are mandatory!');
      return;
    }

    handleClose(); 
  };

  return (
    <div className='modal-wrapper'>
      <div className=' modal-content-wrapper'>
      <button className='close-btn' onClick={handleClose}>X</button>
        <h1 className='heading'>Create New Group</h1>
        <label className='create-name'>
          <span>Group Name</span>
          <input
            type='text'
            placeholder='Enter Group Name'
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </label>

        <div className='color'>
          Choose Colour
          <div className='color-option'>
            {['red', 'blue', 'green', 'yellow', 'pink', 'purple'].map((color) => (
              <li
                key={color}
                className={`color-${color}`}
                style={{
                  backgroundColor: color,
                  border: color === colorCode ? '2px solid black' : 'none',
                }}
                onClick={() => setColorCode(color)}
              ></li>
            ))}
          </div>
        </div>

        <button className='create-btn' onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};
