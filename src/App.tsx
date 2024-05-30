import Botão from "./components/Botão";
import InputCustom from "./components/Input";

export default function EndereçoMarte() {
  return (
    <form className="max-w-md mx-auto p-4 shadow-md rounded-md mt-5">
      <h2 className="text-2xl font-bold mb-4 font-mono">Endereço em Marte</h2>
      <div className="mb-4">
        <InputCustom
          label="Nome do local"
          id="nome-local"
          placeholder="Digite o nome do local"
          required={true}
        />
      </div>
      <div className="mb-4">
        <InputCustom
          label="Responsável"
          id="responsável"
          placeholder="Digite o nome do responsável"
        />
      </div>
      <div className="mb-4">
        <InputCustom
          label="Localização"
          id="local"
          placeholder="Digite o dígito do lote"
          required={true}
          length={4}
        />
      </div>
      <div className="flex justify-end">
        <Botão label="Enviar" />
      </div>
    </form>
  );
}
