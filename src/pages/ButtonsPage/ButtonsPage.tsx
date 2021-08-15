import React from "react";
import Button from "../../components/Button/Button";
import "./ButtonsPage.css";

const ButtonsPage = () => {
  return (
    <div className="ButtonsPage">
      <div className="container">
        <Button />
      </div>
      <div className="container">
        <Button variant="outline" />
      </div>
      <div className="container">
        <Button variant="text" />
      </div>
    </div>
  );
};

export default ButtonsPage;
