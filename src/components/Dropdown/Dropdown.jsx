import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "./Dropdown.css";

const Dropdown = ({
  options = [],
  value,
  placeholder = "Select an option",
  disabled = false,
  onChange,
  className = "",
  grouped = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value, option);
    }
  };

  const getDisplayText = () => {
    if (selectedValue) {
      const selectedOption = options.find((opt) => opt.value === selectedValue);
      return selectedOption ? selectedOption.label : selectedValue;
    }
    return placeholder;
  };

  const dropdownClasses = [
    "dropdown-container",
    disabled ? "dropdown-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const triggerClasses = [
    "dropdown-trigger",
    isOpen ? "dropdown-open" : "",
    disabled ? "dropdown-trigger-disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const renderOptions = () => {
    if (grouped) {
      return options.map((group, groupIndex) => (
        <div key={groupIndex} className="dropdown-group">
          {group.label && (
            <div className="dropdown-group-header">{group.label}</div>
          )}
          {group.options.map((option, optionIndex) => (
            <div
              key={optionIndex}
              className={`dropdown-option ${
                selectedValue === option.value ? "dropdown-option-selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      ));
    }

    return options.map((option, index) => (
      <div
        key={index}
        className={`dropdown-option ${
          selectedValue === option.value ? "dropdown-option-selected" : ""
        }`}
        onClick={() => handleSelect(option)}
      >
        {option.label}
      </div>
    ));
  };

  return (
    <div className={dropdownClasses} ref={dropdownRef} {...props}>
      <button
        type="button"
        className={triggerClasses}
        onClick={handleToggle}
        disabled={disabled}
      >
        <span className="dropdown-text">{getDisplayText()}</span>
        <ChevronDown
          size={16}
          className={`dropdown-arrow ${isOpen ? "dropdown-arrow-open" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-options">{renderOptions()}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
