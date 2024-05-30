import React from "react";

interface InputCustomProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  length?: number;
}

const InputCustom: React.FC<InputCustomProps> = ({
  label,
  id,
  placeholder,
  required = false,
  length,
}) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-3">
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
          maxLength={length}
        />
      </div>
    </div>
  );
};

export default InputCustom;
