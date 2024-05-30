import RadioGroup from "./InputRadio";

interface PlanetaRadioProps {
  planeta: string;
  setPlaneta: (value: string) => void;
}

export default function PlanetaRadio({
  planeta,
  setPlaneta,
}: PlanetaRadioProps) {
  const options = [
    { label: "Terra", value: "Terra" },
    { label: "Marte", value: "Marte" },
  ];

  return (
    <RadioGroup
      name="Escolha o Planeta"
      options={options}
      selectedValue={planeta}
      onChange={setPlaneta}
    />
  );
}
