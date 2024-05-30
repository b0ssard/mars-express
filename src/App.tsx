import { useState } from "react";
import ContatoForm from "./components/FormularioContato";
import InformacoesPlaneta from "./components/PlanetaRadio";
import TipoEndereco from "./components/TipoEndereco";
import TipoPessoaRadio, {
  PessoaFisicaForm,
  PessoaJuridicaForm,
} from "./components/TipoPessoaRadio";

export default function InformacoesPessoais() {
  const [tipoPessoa, setTipoPessoa] = useState<string>("PF");

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-bold mb-6 font-mono text-center">
        Informações Pessoais
      </h2>

      <TipoPessoaRadio tipoPessoa={tipoPessoa} setTipoPessoa={setTipoPessoa} />

      {tipoPessoa === "PF" && <PessoaFisicaForm />}
      {tipoPessoa === "PJ" && <PessoaJuridicaForm />}

      <ContatoForm />

      {tipoPessoa === "PF" && <TipoEndereco />}

      <InformacoesPlaneta />

      <div className="flex justify-end mt-6">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  );
}
