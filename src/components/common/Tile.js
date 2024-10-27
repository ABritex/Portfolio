import React from "react";
import TileItem from "./TileItem";
import "../../styles/components/Tile.css";

function Tile({ className, title, items, onItemClick, activeIndex }) {
  return (
    <div className={`tile ${className}`}>
      <h3>{title}</h3>
      {activeIndex !== null && (
        <p className="item-count">
          {activeIndex + 1} of {items.length}
        </p>
      )}{" "}
      <div className="tile-content">
        <ul>
          {items.map((item, index) => (
            <TileItem key={index} item={item} onClick={onItemClick} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tile;
