export function Button({ onClick, children }) {
  return (
    <button
      className="bg-[#f98866] px-4 py-1 rounded-md my-2 disabled:bg-[#f98866] text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
