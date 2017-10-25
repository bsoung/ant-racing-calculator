import React from "react";

export default ({ name, length, weight, color }) => {
  return (
    <div>
      name: {name}
      weight: {weight}
      length: {length}
      color: {color}
    </div>
  );
};
