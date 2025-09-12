import React from "react";
import "./Checkbox.css";

const Checkbox = ({
  id,
  name,
  checked = false,
  disabled = false,
  label,
  onChange,
  className = "",
  ...props
}) => {
  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e.target.checked, e);
    }
  };

  const checkboxClasses = [
    "checkbox-input",
    disabled ? "checkbox-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={checkboxClasses}
        {...props}
      />
      <label htmlFor={id} className="checkbox-label">
        <span className="checkbox-custom"></span>
        {label && <span className="checkbox-text">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
