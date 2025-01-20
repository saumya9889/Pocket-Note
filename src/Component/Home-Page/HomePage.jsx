
import { useState, useContext } from "react";
import { Modal } from "../Modal";
import  {SideBar}  from "../side-bar";
import { MainContent } from "../MainContent";
import { AppContext } from "../ContextApi";
import { BlankScreen } from "./blank-screen";



export const HomePage = () => {

  const {isUserFlag, isMobile} = useContext(AppContext);
  // console.log(isUserFlag, "isUserFlag");

  const [isCardOpen, setIsCardOpen] = useState(false);
  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };
  const handleClose = () => {
    setIsCardOpen(false);
  };
  console.log(isMobile,'isMobile');

  return (
    <div className={`${isMobile ? 'mobile-wrapper' : ""} home-page`} >
      <aside className="sidebar">
      <SideBar>
        <button className="fab" onClick={toggleCard}>+</button>
      </SideBar>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
          {/* <MainContent /> */}
         {/* <BlankScreen /> */}
      
         {isUserFlag  ? <MainContent />  : <BlankScreen />}
      </main>

      {/* Floating Action Button */}
    

      {isCardOpen && <Modal handleClose={handleClose} toggleCard={toggleCard} />}
    </div>
  );
};
