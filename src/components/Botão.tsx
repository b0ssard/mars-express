interface BotãoProps {
  label: string;
}

export default function Botão({ label }: BotãoProps) {
  return (
    <button className=" bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded font-mono shadow-sm ">
      {label}
    </button>
  );
}
