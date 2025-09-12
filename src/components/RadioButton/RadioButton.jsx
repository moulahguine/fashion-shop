import React from "react";
import "./RadioButton.css";

const RadioButton = ({
  id,
  name,
  value,
  checked = false,
  disabled = false,
  label,
  onChange,
  className = "",
  ...props
}) => {
  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e.target.value, e);
    }
  };

  const radioClasses = [
    "radio-input",
    disabled ? "radio-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="radio-container">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={radioClasses}
        {...props}
      />
      <label htmlFor={id} className="radio-label">
        <span className="radio-custom"></span>
        {label && <span className="radio-text">{label}</span>}
      </label>
    </div>
  );
};

export default RadioButton;
