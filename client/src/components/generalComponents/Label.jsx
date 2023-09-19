export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-2xl font-bold m-7 text-[#f98866] font-serif flex flex-row">
      {children}
    </label>
  );
}