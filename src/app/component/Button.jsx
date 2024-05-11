export default function Button({ children, onClick ,type}) {
  return (
    <button
      className="px-3 py-1.5 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
      onClick={onClick}
      type={type}
      
    >
      {children}
    </button>
  );
}
