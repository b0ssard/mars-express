import Botão from "./Botão";
import InputCustom from "./Input";

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
        label="Responsável"
        id="responsável"
        placeholder="Digite o nome do responsável"
      />
      <InputCustom
        label="Localização"
        id="local"
        placeholder="Digite o dígito do lote"
        required={true}
        length={4}
      />
      <Botão label="Enviar" />
    </form>
  );
}
