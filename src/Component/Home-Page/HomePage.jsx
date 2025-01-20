import { useState, useContext } from "react";
import { Modal } from "../Modal";
import  {SideBar}  from "../side-bar";
import { MainContent } from "../MainContent";
import { AppContext } from "../ContextApi";
import { BlankScreen } from "./blank-screen";



export const HomePage = () => {

  const {isUserFlag} = useContext(AppContext);
  // console.log(isUserFlag, "isUserFlag");

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
          {/* <MainContent /> */}
         {/* <BlankScreen /> */}
      
         {isUserFlag  ? <MainContent />  : <BlankScreen />}
      </main>

      {/* Floating Action Button */}
      <button className="fab" onClick={toggleCard}>+</button>

      {isCardOpen && <Modal handleClose={handleClose} toggleCard={toggleCard} />}
    </div>
  );
};
