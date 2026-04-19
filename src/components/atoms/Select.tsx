import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface SelectProps {
  label?: string; 
  register: UseFormRegisterReturn;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  register,
  error,
  options,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      
      <select
        {...register}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
          error 
            ? "border-red-500 focus:ring-red-200" 
            : "border-gray-300 focus:ring-blue-500"
        }`}
      >
        <option value="">Pilih Kategori...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};