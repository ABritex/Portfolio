import React, { useState } from "react";
import Tile from "./components/common/Tile";
import ContentDisplay from "./components/common/ContentDisplay";
import Footer from "./components/common/Footer";
import { contentComponents } from "./contexts/AppContent";
import "./styles/layout/App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("Home");
  const [activeDescription, setActiveDescription] = useState(null);

  return (
    <div className="app-container">
      <div className="tiles-container">
        <Tile
          title="Home"
          items={contentComponents.Home}
          onItemClick={(item) => {
            setActiveCategory("Home");
            setActiveDescription(item.description);
          }}
          className="home-tile"
        />
        {["Experience", "Projects", "Skills - Tools"].map((category, index) => (
          <Tile
            key={index}
            title={category}
            items={contentComponents[category]}
            onItemClick={(item) => {
              setActiveCategory(category);
              setActiveDescription(item.description);
            }}
            className="other-tile"
          />
        ))}
      </div>
      <ContentDisplay
        activeCategory={activeCategory}
        activeDescription={activeDescription}
      />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
