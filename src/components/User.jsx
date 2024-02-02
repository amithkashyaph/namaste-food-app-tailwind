import React, { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h3>Contact: 123456789</h3>
      <h4>Count FC : {count}</h4>
    </div>
  );
};

export default User;
