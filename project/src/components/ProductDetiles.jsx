import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

export function ProductDetails() {
    let { id } = useParams();
    const [product, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3005/products/${id}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAddToCart = () => {
        // Add code to add the product to the cart
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={product.image} alt={product.productName} />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="details">
                        <h2 className="mb-4">{product.productName}</h2>
                        <p className="mb-4">{product.description}</p>
                        <p className="mb-4">Price: ${product.price}</p>
                        <p className="mb-4">Quantity: {product.quantity}</p>
                        <hr className="my-4" />
                        <div className="product-details">
                            <div className="form-group row my-3 mx-0">
                                <label htmlFor="quantity" className="col-md-3 col-form-label">Quantity:</label>
                                <div className="col-md-9">
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        min="1"
                                        max={product.quantity}
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="form-control"
                                        style={{ maxWidth: '100px' }}
                                    />
                                </div>
                            </div>
                            <div className="form-group row my-4   " style={{ paddingLeft: '-10%', }}>
                                <div className="col-md-9 offset-md-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleAddToCart}
                                        disabled={quantity > +product.quantity || +product.quantity == 0}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <NavLink to="/products" className="btn btn-secondary">Back to Products</NavLink>
                </div>
            </div>
        </div>
    )
}

