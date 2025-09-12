import React from "react";
import "./Button.css";

const Button = ({
  children,
  variant = "solid",
  size = "medium",
  disabled = false,
  icon,
  iconPosition = "left",
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const baseClasses = "btn-base";
  const variantClasses = {
    solid: "btn-solid",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };
  const sizeClasses = {
    short: "btn-short",
    medium: "btn-medium",
    tall: "btn-tall",
  };
  const disabledClasses = disabled ? "btn-disabled" : "";

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  const renderContent = () => {
    if (icon && iconPosition === "left") {
      return (
        <>
          <span className="btn-icon">{icon}</span>
          {children && <span>{children}</span>}
        </>
      );
    }
    if (icon && iconPosition === "right") {
      return (
        <>
          {children && <span>{children}</span>}
          <span className="btn-icon">{icon}</span>
        </>
      );
    }
    if (icon && !children) {
      return <span className="btn-icon-only">{icon}</span>;
    }
    return children;
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
