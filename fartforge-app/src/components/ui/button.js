export function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}
