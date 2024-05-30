import InputCustom from "./Input";

export default function EndereçoTerra() {
  return (
    <form>
      <h2>Endereço na Terra</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className=" w-24 col-span-1 sm:col-span-2 ">
          <InputCustom
            label="CEP"
            id="cep"
            placeholder="CEP"
            required={true}
            length={8}
          />
        </div>

        <div className=" w-auto col-span-1">
          <InputCustom
            label="Logradouro"
            id="logradouro"
            placeholder="Digite o logradouro"
            required={true}
          />
        </div>

        <div className=" w-20 col-span-1">
          <InputCustom
            label="Número"
            id="numero"
            placeholder="Digite o número"
            required={true}
          />
        </div>

        <div className="col-span-1">
          <InputCustom
            label="Complemento"
            id="complemento"
            placeholder="Digite o complemento"
          />
        </div>

        <div className="col-span-1">
          <InputCustom
            label="Referência"
            id="referencia"
            placeholder="Digite uma referência"
          />
        </div>

        <div className="col-span-1">
          <InputCustom
            label="Cidade"
            id="cidade"
            placeholder="Digite a cidade"
            required={true}
          />
        </div>

        <div className="col-span-1">
          <InputCustom
            label="Estado"
            id="estado"
            placeholder="Digite o estado"
            required={true}
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button>Enviar</button>{" "}
      </div>
    </form>
  );
}
