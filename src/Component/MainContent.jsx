
import React, { useContext, useState } from "react";
import NoteCard from "./NoteCard";
import Send from "../assets/images/Vector.png";
import { AppContext } from "./ContextApi";

export const MainContent = () => {
  const { pocketNotes, handleAddPocketNote,handleIsMobile } = useContext(AppContext); 
  const [noteText, setNoteText] = useState(""); 



  const getFirstAndLastLetter = (name) => {
    if (!name) return "";
    const firstLetter = name.charAt(0).toUpperCase();
    const lastLetter = name.charAt(name.length - 1).toUpperCase();
    return `${firstLetter}${lastLetter}`;
  };

  const handleSendNote = () => {
    if (!noteText.trim()) return; // Avoid sending empty notes

    const newNote = {
      id: Date.now(), // Unique ID for the note
      text: noteText,
      date: new Date().toLocaleDateString(),
time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),    };

    // Update pocketNotes with the new note
    handleAddPocketNote({
      ...pocketNotes,
      notes: [...(pocketNotes?.notes || []), newNote],
    });

    setNoteText(""); // Clear textarea after sending
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      handleSendNote(); 
    }
  };
// console.log(pocketNotes,'pocketNotes');
 
  return (
    <div className="main-content-container">
      <div className="header">
         <button  className="back-button" onClick={() => handleIsMobile(false)}> {'<'} </button>
        {pocketNotes?.name && (
          <>
            <span
              className="header-icon"
              style={{ background: pocketNotes?.color }}
            >
              {getFirstAndLastLetter(pocketNotes?.name)}
            </span>
            <h2>{pocketNotes?.name}</h2>
          </>
        )}
      </div>

      <div className="note-container">
        {pocketNotes?.notes?.map((note) => (
          <NoteCard
            key={note.id}
            text={note.text}
            date={note.date}
            time={note.time}
          />
        ))}
      </div>

      <div className="input-section">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)} // Update noteText state
          onKeyDown={handleKeyDown} // Handle Enter key
          placeholder="Enter your text here..."
        ></textarea>
        <button className="send-button" onClick={handleSendNote}>
          <img src={Send} alt="Send" className="send-icon" />
        </button>
      </div>
    </div>
  );
};


