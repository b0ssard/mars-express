import InputCustom from "./Input";

interface TipoPessoaRadioProps {
  tipoPessoa: string;
  setTipoPessoa: (value: string) => void;
}

export function PessoaFisicaForm() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <InputCustom
        label="Nome"
        id="nome"
        placeholder="Digite seu nome"
        required
      />
      <InputCustom
        label="Sobrenome"
        id="sobrenome"
        placeholder="Digite seu sobrenome"
        required
      />
    </div>
  );
}

export function PessoaJuridicaForm() {
  return (
    <div className="mb-4">
      <InputCustom
        label="Nome da Empresa"
        id="nome-empresa"
        placeholder="Digite o nome da empresa"
        required
      />
    </div>
  );
}

export default function TipoPessoaRadio({
  tipoPessoa,
  setTipoPessoa,
}: TipoPessoaRadioProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">
        Tipo de Pessoa
      </label>
      <div className="flex">
        <label className="mr-4">
          <input
            type="radio"
            name="tipoPessoa"
            value="PF"
            checked={tipoPessoa === "PF"}
            onChange={() => setTipoPessoa("PF")}
            className="mr-1"
          />
          Pessoa Física
        </label>
        <label>
          <input
            type="radio"
            name="tipoPessoa"
            value="PJ"
            checked={tipoPessoa === "PJ"}
            onChange={() => setTipoPessoa("PJ")}
            className="mr-1"
          />
          Empresa
        </label>
      </div>
    </div>
  );
}
