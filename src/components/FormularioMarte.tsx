import InputCustom from "./Input";

export default function EndereçoMarte() {
  const campos = [
    {
      label: "Nome do local",
      id: "nome-local",
      placeholder: "Digite o nome do local",
      required: true,
    },
    {
      label: "Responsável",
      id: "responsável",
      placeholder: "Digite o nome do responsável",
    },
    {
      label: "Localização",
      id: "local",
      placeholder: "Digite o código do lote",
      required: true,
      length: 4,
    },
  ];

  return (
    <form>
      <h2>Endereço em Marte</h2>
      {campos.map((campo) => (
        <div className="mb-4" key={campo.id}>
          <InputCustom
            label={campo.label}
            id={campo.id}
            placeholder={campo.placeholder}
            required={campo.required}
            length={campo.length}
          />
        </div>
      ))}
      <div className="flex justify-end"></div>
    </form>
  );
}
