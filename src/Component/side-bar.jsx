import React, { useContext} from "react";
import { AppContext } from "./ContextApi";

export const SideBar = () => {
  const { groups, handleAddPocketNote, pocketNotes, handleUserFlag } = useContext(AppContext); // Access groups from context // yaha se data le rhe hai
  
  const pocketNotesData = JSON.parse(localStorage.getItem("pocketNotes")) || {};
console.log(pocketNotesData, "pocketNotesData");
  const handleUserData = (group,index) => {
    handleUserFlag(true);
    const isNoteFlag = pocketNotesData.name ===  group.name ? true : false;
    handleAddPocketNote({
      ...group, 
      notes: isNoteFlag ? pocketNotesData?.notes : []		
    });
  };
  


  const getFirstAndLastLetter = (name) => {
    if (!name) return "";
    const firstLetter = name.charAt(0).toUpperCase(); // First letter
    const lastLetter = name.charAt(name.length - 1).toUpperCase(); // Last letter
    return `${firstLetter}${lastLetter}`; // Combine the letters
  };

  return (
    <div className="sidebar-content-wrapper">
      <h2 className="main-heading">Pocket Notes</h2>
      <ul>
        {groups?.map((group, index) => (
          <li key={index} onClick={() => handleUserData(group, index)}>
            <span
              className="group-icon"
              style={{ background: group.color || "#ffc0cb" }}
            >
              {getFirstAndLastLetter(group.name)}
            </span>
            <span className="group-name">{group.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
