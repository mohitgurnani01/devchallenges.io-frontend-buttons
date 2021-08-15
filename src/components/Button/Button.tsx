import React from "react";
import IProps from "../../IProps";
import "./Button.css";

interface Props extends IProps {
  variant?: string;
  children?: any;
  clickHandler?: () => void;
}

const Button = ({ variant, children, clickHandler }: Props) => {
  return (
    <button className={`custom-button ${variant}`} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: "Default",
  clickHandler: () => console.log("Button clicked"),
};

export default Button;
