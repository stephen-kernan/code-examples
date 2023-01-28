import React from "react";

export const Button = ({ label, onClick, variant, disabled }) => {
  return (
    <button
      data-testid="button"
      className={`button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
