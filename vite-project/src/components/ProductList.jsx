import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h2> Click on item for description!</h2>
            <ul>
                <div className="container">
                {products.map(product => (
                    
                    <li className="card" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                    <img className="img" src={product.image} alt={product.title} />
                    
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating.rate} (count: {product.rating.count})</p>
                    </Link>
                    </li>
                   
                ))}
                
                </div>
            </ul>
        </div>
    );
};

export default ProductList;