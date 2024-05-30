import InputCustom from "./Input";
import RadioGroup from "./InputRadio";

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
      <InputCustom
        label="Responsável"
        id="responsável"
        placeholder="Quem deverá receber ou enviar?"
      />
    </div>
  );
}

export default function TipoPessoaRadio({
  tipoPessoa,
  setTipoPessoa,
}: TipoPessoaRadioProps) {
  const options = [
    { label: "Pessoa Física", value: "PF" },
    { label: "Empresa", value: "PJ" },
  ];

  return (
    <>
      <h2>Quem receberá?</h2>
      <RadioGroup
        options={options}
        selectedValue={tipoPessoa}
        onChange={setTipoPessoa}
      />
    </>
  );
}
