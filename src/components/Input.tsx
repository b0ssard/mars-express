interface InputCustomProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  length?: number;
}

export default function InputCustom({
  label,
  id,
  length,
  placeholder,
  required = false,
}: InputCustomProps) {
  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-3 relative">
        <label htmlFor={id} className="block font-semibold mb-2">
          {label}
        </label>
        <input
          name={id}
          id={id}
          className="shadow-md hover:shadow-xl placeholder:text-s font-mono appearance-none border rounded w-full py-2 px-3 text-stone-900 leading-tight focus:outline-none"
          placeholder={placeholder}
          aria-label={label}
          required={required}
          minLength={length}
          maxLength={length}
        />

        {!required && (
          <span className="absolute bottom-0 right-0 text-sm text-gray-300">
            Opcional
          </span>
        )}
      </div>
    </div>
  );
}
