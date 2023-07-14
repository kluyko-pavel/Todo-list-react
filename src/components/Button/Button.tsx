import { MouseEventHandler } from "react";
import "./Button.scss";

export const Button = ({
  text,
  onClick,
  type,
}: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};
