import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", background: "#ddd" }}>
    <Link to="/" style={{ margin: "10px" }}>Home</Link>
    <Link to="/add-product" style={{ margin: "10px" }}>Add Product</Link>
  </nav>
);

export default Navbar;
