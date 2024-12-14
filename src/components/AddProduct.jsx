import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" onChange={handleChange} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
