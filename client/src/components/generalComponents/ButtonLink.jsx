import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-[#f98866] px-4 py-1 rounded-md">
    {children}
  </Link>
);
