import React, { useContext, useEffect } from "react";
import { AppContext } from "./ContextApi";

export const SideBar = () => {
  const { groups, handleAddPocketNote, pocketNotes } = useContext(AppContext); // Access groups from context // yaha se data le rhe hai
  // console.log(groups, "groups");
  console.log(pocketNotes, "groups");

  // useEffect(() => {
  //   console.log(pocketNotes, "groups");  }, []);

  const getFirstAndLastLetter = (name) => {
    if (!name) return "";
    const firstLetter = name.charAt(0).toUpperCase(); // First letter
    const lastLetter = name.charAt(name.length - 1).toUpperCase(); // Last letter
    return `${firstLetter}${lastLetter}`; // Combine the letters
  };

  return (
    <div className="sidebar-content-wraper">
      <h2>Pocket Notes</h2>
      <ul>
        {groups?.map((group, index) => (
          <li key={index} onClick={() => handleAddPocketNote(group)}>
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
