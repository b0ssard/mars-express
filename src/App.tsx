import { useState } from "react";
import EndereçoMarte from "./components/FormularioMarte";
import EndereçoTerra from "./components/FormularioTerra";
import PlanetaRadio from "./components/PlanetaRadio";
import TipoPessoaRadio, {
  PessoaFisicaForm,
  PessoaJuridicaForm,
} from "./components/TipoPessoaRadio";

export default function Cadastro() {
  const [planeta, setPlaneta] = useState<string>("Terra");
  const [tipoPessoa, setTipoPessoa] = useState<string>("PF");

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-bold mb-6 font-mono text-center">
        Informações de Tipo de Pessoa
      </h2>
      <TipoPessoaRadio tipoPessoa={tipoPessoa} setTipoPessoa={setTipoPessoa} />

      {tipoPessoa === "PF" && <PessoaFisicaForm />}
      {tipoPessoa === "PJ" && <PessoaJuridicaForm />}

      <h2 className="text-2xl font-bold mb-6 font-mono text-center">
        Informações do Planeta
      </h2>

      <PlanetaRadio planeta={planeta} setPlaneta={setPlaneta} />

      {planeta === "Terra" && <EndereçoTerra />}
      {planeta === "Marte" && <EndereçoMarte />}

      <div className="flex justify-end mt-6">
        <button>Enviar</button>
      </div>
    </form>
  );
}
