import React from "react";
import NoteDesign from "../../assets/images/note-design.png"


export const BlankScreen = () => {
  return (
    <>
      <div className="blank-screen-wrapper">
        <div className="content">
          <img
            src={NoteDesign}
            alt="Pocket Notes Illustration"
            className="illustration"
          />
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online. <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
          </p>
        </div>

        <span className="encryption-info">🔒 end-to-end encrypted</span>
      </div>
    </>
  );
};
