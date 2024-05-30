export default function TipoEndereco() {
  const opcoes = [
    { value: "casa", label: "Casa" },
    { value: "trabalho", label: "Trabalho" },
    { value: "outros", label: "Outros" },
  ];

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Marcar como</label>
      <div className="flex">
        {opcoes.map((opcao) => (
          <label key={opcao.value} className="mr-4">
            <input
              type="radio"
              name="marcarComo"
              value={opcao.value}
              className="mr-1"
            />
            {opcao.label}
          </label>
        ))}
      </div>
    </div>
  );
}
