import React, { useState } from "react";

interface InputCustomProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  length?: number;
}

function InputCustom({
  label,
  id,
  length,
  placeholder,
  required = false,
}: InputCustomProps) {
  const [error, setError] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    if (length && newValue.length !== length) {
      setError(
        `O ${label.toLowerCase()} deve ter exatamente ${length} caracteres.`
      );
    } else {
      setError("");
    }
  }

  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-3 relative">
        <label htmlFor={id} className="block font-semibold mb-2">
          {label}
        </label>
        <input
          type="text"
          name={id}
          id={id}
          className="shadow-md hover:shadow-xl appearance-none border rounded w-full py-2 px-3 text-stone-900 leading-tight focus:outline-none"
          placeholder={placeholder}
          aria-label={label}
          required={required}
          minLength={length}
          maxLength={length}
          onChange={handleChange}
        />
        {error && (
          <span className="absolute bottom-0 left-0 text-sm text-red-500">
            {error}
          </span>
        )}
        {!required && (
          <span className="absolute bottom-0 right-0 text-sm text-gray-300">
            Opcional
          </span>
        )}
      </div>
    </div>
  );
}

export default InputCustom;
