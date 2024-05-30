import InputCustom from "./Input";

export default function EndereçoTerra() {
  const campos = [
    {
      label: "CEP",
      id: "cep",
      placeholder: "CEP",
      required: true,
      length: 8,
      className: "w-24 sm:col-span-2",
    },
    {
      label: "Logradouro",
      id: "logradouro",
      placeholder: "Digite o logradouro",
      required: true,
      className: "w-auto",
    },
    {
      label: "Número",
      id: "numero",
      placeholder: "Digite o número",
      required: true,
      className: "w-20",
    },
    {
      label: "Complemento",
      id: "complemento",
      placeholder: "Digite o complemento",
    },
    {
      label: "Referência",
      id: "referencia",
      placeholder: "Digite uma referência",
    },
    {
      label: "Cidade",
      id: "cidade",
      placeholder: "Digite a cidade",
      required: true,
    },
    {
      label: "Estado",
      id: "estado",
      placeholder: "Digite o estado",
      required: true,
    },
  ];

  return (
    <>
      <h2>Endereço na Terra</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {campos.map((campo) => (
          <div key={campo.id} className={`col-span-1 ${campo.className}`}>
            <InputCustom
              label={campo.label}
              id={campo.id}
              placeholder={campo.placeholder}
              required={campo.required}
              length={campo.length}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6"></div>
    </>
  );
}
