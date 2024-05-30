import { useState } from "react";
import Botão from "./components/Botão";
import InputCustom from "./components/Input";

export default function InformacoesPessoais() {
  const [tipoPessoa, setTipoPessoa] = useState("PF");

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-bold mb-6 font-mono text-center">
        Informações Pessoais
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Tipo de Pessoa
        </label>
        <div className="flex">
          <label className="mr-4">
            <input
              type="radio"
              name="tipoPessoa"
              value="PF"
              checked={tipoPessoa === "PF"}
              onChange={() => setTipoPessoa("PF")}
              className="mr-1"
            />
            Pessoa Física
          </label>
          <label>
            <input
              type="radio"
              name="tipoPessoa"
              value="PJ"
              checked={tipoPessoa === "PJ"}
              onChange={() => setTipoPessoa("PJ")}
              className="mr-1"
            />
            Empresa
          </label>
        </div>
      </div>

      {tipoPessoa === "PF" && (
        <>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="col-span-1">
              <InputCustom
                label="Nome"
                id="nome"
                placeholder="Digite seu nome"
                required={true}
              />
            </div>
            <div className="col-span-1">
              <InputCustom
                label="Sobrenome"
                id="sobrenome"
                placeholder="Digite seu sobrenome"
                required={true}
              />
            </div>
          </div>
        </>
      )}

      {tipoPessoa === "PJ" && (
        <div className="mb-4">
          <InputCustom
            label="Nome da Empresa"
            id="nome-empresa"
            placeholder="Digite o nome da empresa"
            required={true}
          />
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="col-span-1">
          <InputCustom
            label="Telefone"
            id="telefone"
            placeholder="Digite o telefone"
            required={true}
            length={11}
          />
        </div>
        <div className="col-span-1">
          <InputCustom
            label="Email"
            id="email"
            placeholder="Digite o email"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Marcar como
          </label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                name="marcarComo"
                value="casa"
                className="mr-1"
              />
              Casa
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="marcarComo"
                value="trabalho"
                className="mr-1"
              />
              Trabalho
            </label>
            <label>
              <input
                type="radio"
                name="marcarComo"
                value="outros"
                className="mr-1"
              />
              Outros
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Botão label="Enviar" />
      </div>
    </form>
  );
}
