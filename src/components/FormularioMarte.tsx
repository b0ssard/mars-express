import InputCustom from "./Input";

export default function EndereçoMarte() {
  return (
    <form>
      <h2>Endereço em Marte</h2>
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
          placeholder="Digite o código do lote"
          required={true}
          length={4}
        />
      </div>
      <div className="flex justify-end">
        <button>Enviar</button>{" "}
      </div>
    </form>
  );
}
