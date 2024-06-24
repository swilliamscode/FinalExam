import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handlePurchase = (product) => {
    alert(`Purchased ${product.title}`);
  };

  return (
    <div>
      <h2> Newest arrivals!</h2>
      <ul>
        <div className="container">
          {products.map((product) => (
            <li className="card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img className="img" src={product.image} alt={product.title} />
                <h2 className="card-text">{product.title}</h2>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">
                  Rating: {product.rating.rate} (count: {product.rating.count})
                </p>
                <button
                  className="purchase-button"
                  onClick={() => handlePurchase(product)}
                >
                  Buy Now
                </button>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ProductList;
