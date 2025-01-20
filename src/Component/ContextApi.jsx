
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [groups, setGroups] = useState(() => {
    // Initialize groups from localStorage
    const savedGroups = localStorage.getItem("groups");
    return savedGroups ? JSON.parse(savedGroups) : [];
  });
  const [isMobile, setIsMobile] = useState(false);

  const [isUserFlag, setIsUserFlag] = useState(false);
  const handleUserFlag = () => setIsUserFlag(true);

  const [pocketNotes, setPocketNotes] = useState();

  const HandleAddGroupData = (group) => {
    setGroups((prevGroups) => {
      const updatedGroups = [...prevGroups, group];
      localStorage.setItem("groups", JSON.stringify(updatedGroups)); // Save to localStorage
      return updatedGroups;
    });
  };
  
//  const mobileVisible= window.innerWidth < 768;
//  useEffect(() => {
//   setIsMobile(true)
//   }, []);
  const handleIsMobile =(e) => {
    setIsMobile(false);
  }
  const handleAddPocketNote = (note) => {
    setPocketNotes(note); // Only update state, no localStorage interaction
    localStorage.setItem("pocketNotes", JSON.stringify(note)); // Save to localStorage
    setIsMobile(true);
  };

  // useEffect(() => {
  //   const savedPocketNotes = localStorage.getItem("pocketNotes");
  //   if (savedPocketNotes) {
  //     setPocketNotes(JSON.parse(savedPocketNotes)); // Retrieve from localStorage
  //   }
  // }, []);

  // Sync groups with localStorage when they change
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  return (
    <AppContext.Provider
      value={{ groups, HandleAddGroupData, handleAddPocketNote, pocketNotes, isUserFlag, handleUserFlag,isMobile,handleIsMobile}}
    >
      {children}
    </AppContext.Provider>
  );
};
