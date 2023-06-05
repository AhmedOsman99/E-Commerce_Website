import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../store-redux/cartSlice';
import { Button, Table, Image, Row, Col, Card, Container } from 'react-bootstrap';

export function MyCart() {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <Container>
            <div className="my-cart">
                <h2>My Cart</h2>
                <Row>
                    <Col xs={12} md={8}>
                        <Card className="p-3">
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty</p>
                            ) : (
                                <Table responsive className="table-sm">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th className="d-none d-md-table-cell">Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map(item => (
                                            <tr key={item.id}>
                                                <td className="d-none d-md-table-cell">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fluid
                                                        rounded
                                                        className="cart-item-image"
                                                        style={{ height: '100px' }}
                                                    />
                                                </td>
                                                <td className="align-middle">{item.name}</td>
                                                <td className="d-none d-md-table-cell align-middle">${item.price}</td>
                                                <td className="align-middle">
                                                    <div className="quantity d-flex">
                                                        <Button
                                                            className="  m-2"
                                                            variant="outline-dark"
                                                            style={{ fontSize: '5' }}
                                                            onClick={() =>
                                                                dispatch(decrementQuantity({ id: item.id }))
                                                            }
                                                            disabled={item.quantity === 1}
                                                        >
                                                            -
                                                        </Button>
                                                        <span className="quantity-value align-self-center m-1">{item.quantity}</span>
                                                        <Button
                                                            className=" m-2"
                                                            variant="outline-dark"
                                                            style={{ fontSize: '5' }}
                                                            onClick={() =>
                                                                dispatch(incrementQuantity({ id: item.id }))
                                                            }
                                                        >
                                                            +
                                                        </Button>
                                                    </div>
                                                </td>
                                                <td className="align-middle">${item.price * item.quantity}</td>
                                                <td className="align-middle">
                                                    <i onClick={() => dispatch(removeFromCart(item))} className='i-animation fs-3  px-2 py-0 m-0 bi bi-trash'></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="p-3">
                            {cartItems.length !== 0 && (
                                <>
                                    <h3>Cart Summary</h3>
                                    {cartItems.map(item => (
                                        <div key={item.id} className="cart-summary-item">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fluid
                                                rounded
                                                className="cart-item-thumbnail d-none d-md-block"
                                                style={{ width: '20px' }}
                                            />
                                            <div className="cart-item-details">
                                                <p>{item.name}</p>
                                                <p>
                                                    {item.quantity} x ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="cart-summary-total">
                                        <p>
                                            Total items: <span>{cartItems.length}</span>
                                        </p>
                                        <p>
                                            Total price:{' '}
                                            <span>
                                                ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                                            </span>
                                        </p>
                                    </div>
                                    <Button onClick={() => dispatch(clearCart())} className="clear-cart-button m-2 text-center">Clear Cart</Button>
                                    <Button className="checkout-button m-2 text-center">Checkout</Button>
                                </>
                            )}
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}