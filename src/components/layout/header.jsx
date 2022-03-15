import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="center">
      <Link to="/">Back to the list of houses</Link>
    </nav>
  );
}