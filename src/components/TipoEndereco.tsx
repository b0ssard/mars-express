export default function TipoEndereco() {
  return (
    <>
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
          <label className="mr-4 font">
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
    </>
  );
}
