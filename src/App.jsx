import { useState } from 'react'
import Sidebar from './components/SideBar';
import HomeView from './components/HomeView';
import ReferenceView from './components/ReferenceView';
import PracticeView from './components/PracticeView';

function App() {
  const [activeView, setActiveView] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("All");


  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar activeView={activeView} setActiveView={setActiveView} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      <div style={{ flex: 1, padding: "20px" }}>
        {activeView === "home" && <HomeView setActiveView={setActiveView} />}
        {activeView === "reference" && <ReferenceView selectedCategory={selectedCategory}/>}
        {activeView==="practice" && <PracticeView/>}
      </div>
    </div>
  )
}

export default App
