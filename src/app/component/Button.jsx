export default function Button({ children, onClick, type, bg }) {
  const finalClass =
    bg == "red"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-blue-500 hover:bg-blue-600";
  return (
    <button
      className={`px-3 py-1.5 rounded-md ${finalClass} text-white`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
