import { ChangeEventHandler } from "react";
import "./CustomCheckBox.scss";

export const CustomCheckBox = ({
  isComplete,
  onChange,
}: {
  isComplete: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      className="custom-checkbox"
      type="checkbox"
      checked={isComplete}
      onChange={onChange}
    />
  );
};
