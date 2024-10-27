import React from "react";

function TileItem({ item, onClick }) {
  return (
    <li onClick={() => onClick(item)} className="tile-item">
      {item.name}
    </li>
  );
}

export default TileItem;
