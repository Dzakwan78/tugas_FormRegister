import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
  label?: string; // Tambahkan ? agar opsional
  register: UseFormRegisterReturn;
  error?: string;
  placeholder?: string;
}

// Pastikan ada kata 'export' sebelum 'const Textarea'
export const Textarea: React.FC<TextareaProps> = ({
  label,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <textarea
        {...register}
        placeholder={placeholder}
        className={`border rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};