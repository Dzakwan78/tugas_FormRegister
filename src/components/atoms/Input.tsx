import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface BaseInputProps {
  label?: string; 
  register: UseFormRegisterReturn;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<BaseInputProps> = ({
  label,
  register,
  error,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {/* Label hanya muncul jika props label dikirim */}
      {label && <label className="font-medium text-gray-700">{label}</label>}
      
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
          error ? "border-red-900 focus:ring-red-200" : "border-gray-300 focus:ring-green-500"
        }`}
      />
      
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};