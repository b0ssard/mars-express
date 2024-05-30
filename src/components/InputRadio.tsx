interface RadioGroupProps {
  name?: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({
  name,
  options,
  selectedValue,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">{name}</label>
      <div className="flex">
        {options.map((option) => (
          <label key={option.value} className="mr-4">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
