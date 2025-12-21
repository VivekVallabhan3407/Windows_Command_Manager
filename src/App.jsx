import { useState } from 'react'
import Sidebar from './components/SideBar';
import HomeView from './components/HomeView';
import ReferenceView from './components/ReferenceView';

function App() {
  const [activeView, setActiveView] = useState("home");


  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      <div style={{ flex: 1, padding: "20px" }}>
        {activeView === "home" && <HomeView setActiveView={setActiveView} />}
        {activeView === "reference" && <ReferenceView />}
      </div>
    </div>
  )
}

export default App
