import React from "react";

interface ButtonProps {
    label: string;
    type?: "button" | "submit";
    vaiant?: "primary" | "outline";
    isLoading? : boolean;
}

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  isLoading = false,
}) => {
  const base = "px-4 py-2 rounded font-medium transition-all duration-200 disabled:opacity-50";
  const styles = {
    primary: "bg-green-700 text-white hover:bg-gray-900",
    outline: "border border-blue-600 text-blue-600 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${base} ${styles[variant]}`}
    >
      {isLoading ? "Memproses..." : label}
    </button>
  );
};