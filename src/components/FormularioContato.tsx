import InputCustom from "./Input";
export default function ContatoForm() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <InputCustom
        label="Telefone"
        id="telefone"
        placeholder="Digite o telefone"
        required
        length={11}
      />
      <InputCustom
        label="Email"
        id="email"
        placeholder="Digite o email"
        required
      />
    </div>
  );
}
