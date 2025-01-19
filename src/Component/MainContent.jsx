import React, { useContext } from "react";
import NoteCard from "./NoteCard";
import Send from "../assets/images/Vector.png";
import { AppContext } from "./ContextApi";

export const MainContent = () => {
  const { pocketNotes } = useContext(AppContext);
  console.log(pocketNotes, "bhjbhs");

  const getFirstAndLastLetter = (name) => {
    if (!name) return "";
    const firstLetter = name.charAt(0).toUpperCase(); // First letter
    const lastLetter = name.charAt(name.length - 1).toUpperCase(); // Last letter
    return `${firstLetter}${lastLetter}`; // Combine the letters
  };

  return (
    <div className="main-content-container">
      <div className="header">
        <span
          className="header-icon"
          style={{ background: pocketNotes?.color }} >
           {getFirstAndLastLetter(pocketNotes?.name)}
        </span>
        <h2>{pocketNotes?.name}</h2>
      </div>

      <div className="note-container">
        <NoteCard
          text="Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
          date="9 Mar 2023"
          time="10:10 AM"
        />
      </div>
      <div className="input-section">
        <textarea placeholder="Enter your text here............."></textarea>
        <img src={Send} alt="Send" className="send-icon" />
      </div>
    </div>
  );
};
