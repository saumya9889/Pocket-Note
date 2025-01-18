import { useState } from "react";
// import {HomeCard} from '.';
import { HomeCard } from "../HomeCard";
import { BlankScreen } from "./blank-screen";
import { SideBar } from "../side-bar";



export const HomePage = () => {

  const [isCardOpen, setIsCardOpen] = useState(false);
// const contextData = useContext((e) => {console.log(e)});
  // Toggle function for card visibility
  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="home-page">
      {/* Sidebar */}
      <aside className="sidebar">
      <SideBar />
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
         <BlankScreen />
      </main>

      {/* Floating Action Button */}
      <button className="fab" onClick={toggleCard}>+</button>

      {isCardOpen && <HomeCard toggleCard={toggleCard} />}
    </div>
  );
};
