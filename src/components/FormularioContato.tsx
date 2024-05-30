import InputCustom from "./Input";

export default function ContatoForm() {
  const inputs = [
    {
      label: "Telefone",
      id: "telefone",
      placeholder: "Digite o telefone",
      length: 11,
    },
    {
      label: "Email",
      id: "email",
      placeholder: "Digite o email",
    },
  ];

  return (
    <div className=" sm:grid-cols-2 gap-6">
      {inputs.map((input) => (
        <InputCustom
          key={input.id}
          label={input.label}
          id={input.id}
          placeholder={input.placeholder}
          length={input.length}
        />
      ))}
    </div>
  );
}
