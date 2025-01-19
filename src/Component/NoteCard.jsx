import React from "react";
const NoteCard = ({ text, date, time }) => {
  return (
    <div className="note-card">
      <p className="note-text">{text}</p>
      <div className="note-footer">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default NoteCard;
