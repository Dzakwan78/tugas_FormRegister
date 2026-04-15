import React, { useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
  label?: string; 
  register: UseFormRegisterReturn;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  register,
  error,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register} 
          className={`border rounded px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-2.5 text-sm text-gray-500 hover:text-gray-700"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};