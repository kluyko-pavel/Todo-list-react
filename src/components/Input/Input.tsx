import { ChangeEventHandler } from "react";
import "./Input.scss";

export const Input = ({
  name,
  type,
  placeHolder,
  value,
  onChange,
}: {
  name: string;
  type: string;
  value: string;
  placeHolder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      className="input"
      name={name}
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
};
