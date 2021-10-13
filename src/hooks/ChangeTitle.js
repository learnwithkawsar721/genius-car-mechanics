import React from "react";
import { useEffect } from "react";

const ChangeTitle = ({ pageTitle }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = pageTitle;
    return () => {
      document.title = prevTitle;
    };
  });

  return <></>;
};

export default ChangeTitle;
