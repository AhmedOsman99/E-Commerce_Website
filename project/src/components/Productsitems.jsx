import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { deleteProduct } from "../Redux/productsSlice";

export function Productsitems({ product, isAdmin }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const handleDeleteClick = () => {
        dispatch(deleteProduct(product.id));
    };

    const productInCart = cart.find((p) => p.id === product.id);
    const availableQuantity = product.quantity - (productInCart ? productInCart.quantity : 0);
    const disabled = availableQuantity === 0;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <Card
                style={{
                    border: "none",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    height: "100%",
                }}
            >
                <div className="d-flex flex-column h-100">
                    <div className="position-relative">
                        <Card.Img
                            variant="top"
                            src={product.image}
                            style={{ height: "15rem", objectFit: "contain", padding: "5px" }}
                        />
                        <NavLink to={`/products/${product.id}`}>
                            <i className="i-animation fs-2 text-dark position-absolute top-0 end-0 px-2 py-0 m-0 bi bi-eye-fill"></i>
                        </NavLink>
                        {+product.quantity === 1 && (
                            <span className="badge bg-warning position-absolute top-0 start-0 px-2 py-1 m-1 rounded-pill">
                                Last one left!
                            </span>
                        )}
                        {+product.quantity === 0 && (
                            <span className="badge bg-danger position-absolute top-1 start-0 px-2 py-1 m-1 rounded-pill">
                                Out Of Stock
                            </span>
                        )}
                    </div>
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                                {product.productName}
                            </Card.Title>
                            <Card.Text style={{ color: "#464141", fontSize: "1rem" }}>
                                Price: {product.price}
                            </Card.Text>
                        </div>
                        <Card.Text
                            className={
                                product.quantity === 0
                                    ? "text-danger"
                                    : product.quantity === 1
                                        ? "text-warning"
                                        : "text-dark"
                            }
                            style={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                            {product.quantity === 0
                                ? "Out of stock"
                                : product.quantity === 1
                                    ? "Last one left!"
                                    : ""}
                        </Card.Text>

                        <div className="d-flex justify-content-center">
                            {isAdmin && (
                                <NavLink to={`/products/${product.id}/edit`}>
                                    <i className="i-animation fs-2 text-info position-absolute bottom-1 start-0 px-2 py-0  bi bi-pencil-square"></i>
                                </NavLink>
                            )}

                            <Button
                                onClick={() => {
                                    dispatch(addToCart(product));
                                }}
                                variant="primary"
                                style={{
                                    borderRadius: "25px",
                                    padding: "10px 20px",
                                    fontWeight: "bold",
                                }}
                                disabled={disabled}
                            >
                                {disabled ? "Out of stock" : "Add to Cart"}
                            </Button>
                            {isAdmin && (
                                <i
                                    onClick={handleDeleteClick}
                                    className="i-animation fs-3 position-absolute bottom-1 end-0 px-2 py-0 m-0 bi bi-trash3-fill"
                                    style={{ cursor: "pointer" }}
                                ></i>
                            )}
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
}