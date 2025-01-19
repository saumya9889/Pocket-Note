import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [groups, setGroups] = useState([]); // Array to hold group objects
  const [pocketNotes, setPocketNotes] = useState();

  const HandleAddGroupData = (group) => {
    setGroups((prevGroups) => [...prevGroups, group]); // Add new group to the array
  };
   
  const handleAddPocketNote = (note) => {
    setPocketNotes((prevNotes) => ({ ...prevNotes,   note })); // Store note as an object with an id as key
  };
  return (
    <AppContext.Provider value={{ groups, HandleAddGroupData, handleAddPocketNote , pocketNotes}}>
      {children}
    </AppContext.Provider>
  );
};

