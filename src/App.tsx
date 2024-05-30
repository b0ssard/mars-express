import InputCustom from "./components/Input";

export default function EndereçoMarte() {
  return (
    <form className="max-w-sm mx-auto p-4">
      <InputCustom
        label="Nome do local"
        id="nome-local"
        placeholder="Digite o nome do local"
        required={true}
      />
      <InputCustom
        label="Localização"
        id="local"
        placeholder="Digite o dígito do lote"
        length={4}
        required={true}
      />
    </form>
  );
}
