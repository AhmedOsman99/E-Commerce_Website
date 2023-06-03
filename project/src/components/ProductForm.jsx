import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

export function ProductForm() {
    let { id } = useParams()

    let navigate = useNavigate()
    let [products, setProduct] = useState({})
    let [formValues, setFormValues] = useState({
        productName: "",
        description: "",
        price: "",
        quantity: "",
        image: ""
    })

    let valuesHandler = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    let handeleFormAction = (event) => {
        event.preventDefault()
        if (id == 0) {
            axios.post("http://localhost:3005/products/", formValues).then((response) => {
                navigate("/products/")
            })
        } else {
            axios.put(`http://localhost:3005/products/${id}`, formValues)
                .then((response) => {
                    navigate("/products/")
                })
        }

    }

    let getProduct = async () => {
        let response = await axios.get(`http://localhost:3005/products/${id}`);
        setProduct(response.data)
        setFormValues(response.data)
    }

    useEffect(() => {
        if (id != 0) {
            getProduct()
        }
    }, [id])

    return (
        <div className='container mt-5'>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <Form onSubmit={handeleFormAction}>
                        <h1 className='text-center'>{id == 0 ? "Add Product" : "Edit Product"}</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={valuesHandler} value={formValues.productName} name='productName' type="text" placeholder="Product Name" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={valuesHandler} value={formValues.description} name='description' as="textarea" rows={3} placeholder="Product Description" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control onChange={valuesHandler} value={formValues.price} name='price' type="text" placeholder="enter product Price" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control onChange={valuesHandler} value={formValues.quantity} name='quantity' type="number" placeholder="enter product Quantity" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Image</Form.Label>
                            <Form.Control onChange={valuesHandler} value={formValues.image} name='image' type="text" placeholder="enter product Image URL" />
                        </Form.Group>

                        <div className='text-center'>
                            <Button variant="primary" type="submit">
                                {id == 0 ? "Add Product" : "Edit Product"}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

