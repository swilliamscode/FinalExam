import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>Product Detail</h2>
      <div>
        <img className="img" src={product.image} alt={product.title} />
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">
            Rating: {product.rating.rate} (count: {product.rating.count})
          </p>
          <p className="card-text">{product.description}</p>
          <Link to="/" className="button">
            Back to Product List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
