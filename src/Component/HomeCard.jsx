import React, { useState } from 'react'


export const HomeCard = ({toggleCard}) => {
  const [groupName, setGroupName] = useState('');
  const [colorCode, setColorCode] = useState('');
  const contextData = useContext(AppContext)
    handleCreate = (data, colorCode) => { 
        data = [{ǹame:groupName, color:colorCode}]
        contextData(data)
    }
  return (
    <div className='modal-wrapper'>
      <div className="home-card modal-content-wrapper" onClick={toggleCard}>
        <h1 className='heading'>Create New Group</h1>
        <label className='create-name'>
          <span>Group Name</span>
          <input type="text" placeholder="Enter Group Name" />
        </label>

        <div className='color'>
          Choose Colour
          <div className='color-option'>
            <li className='color-1'></li>
            <li className='color-2'></li>
            <li className='color-3'></li>
            <li className='color-4'></li>
            <li className='color-5'></li>
            <li className='color-6'></li>
          </div>
        </div>

        <button className='create-btn'>Create</button>
      </div>
    </div>
  )
}
