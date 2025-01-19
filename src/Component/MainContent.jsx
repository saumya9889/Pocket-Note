import React from "react";
import NoteCard from "./NoteCard";
import Send from "../assets/images/Vector.png";


export const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="header">
         <span className="header-icon">👋</span>
        <h2>My Notes</h2>
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
        <img src={Send} alt="Send" className="send-icon"/>
      </div>
    </div>
  );
};


