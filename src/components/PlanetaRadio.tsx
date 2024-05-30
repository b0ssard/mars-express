import { useState } from "react";
import EndereçoMarte from "./FormularioMarte";
import EndereçoTerra from "./FormularioTerra";

interface PlanetaRadioProps {
  planeta: string;
  setPlaneta: (value: string) => void;
}
function PlanetaRadio({ planeta, setPlaneta }: PlanetaRadioProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">
        Escolha o Planeta
      </label>
      <div className="flex">
        <label className="mr-4">
          <input
            type="radio"
            name="planeta"
            value="Terra"
            checked={planeta === "Terra"}
            onChange={() => setPlaneta("Terra")}
            className="mr-1"
          />
          Terra
        </label>
        <label>
          <input
            type="radio"
            name="planeta"
            value="Marte"
            checked={planeta === "Marte"}
            onChange={() => setPlaneta("Marte")}
            className="mr-1"
          />
          Marte
        </label>
      </div>
    </div>
  );
}

// Componente principal
export default function InformacoesPlaneta() {
  const [planeta, setPlaneta] = useState<string>("Terra");

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-bold mb-6 font-mono text-center">
        Informações do Planeta
      </h2>

      <PlanetaRadio planeta={planeta} setPlaneta={setPlaneta} />

      {planeta === "Terra" && <EndereçoTerra />}
      {planeta === "Marte" && <EndereçoMarte />}

      <div className="flex justify-end mt-6">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  );
}
