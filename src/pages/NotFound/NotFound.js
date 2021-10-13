import React from "react";
import img from "../../images/404.png";
const NotFound = () => {
  return (
    <div>
      <img src={img} className="w-100 h-100" alt="404" />
    </div>
  );
};

export default NotFound;
