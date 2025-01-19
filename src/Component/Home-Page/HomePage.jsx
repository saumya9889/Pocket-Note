import { useState } from "react";
import { Modal } from "../Modal";
import  {SideBar}  from "../side-bar";
import { MainContent } from "../MainContent";



export const HomePage = () => {

  const [isCardOpen, setIsCardOpen] = useState(false);
  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };
  const handleClose = () => {
    setIsCardOpen(false);
  };

  return (
    <div className="home-page">
      <aside className="sidebar">
      <SideBar />
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
          <MainContent />
         {/* <BlankScreen /> */}
      </main>

      {/* Floating Action Button */}
      <button className="fab" onClick={toggleCard}>+</button>

      {isCardOpen && <Modal handleClose={handleClose} toggleCard={toggleCard} />}
    </div>
  );
};
