import React, { useEffect, useState } from 'react';
import Productsitems from './Productsitems';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const isAdmin = false;

    useEffect(() => {
        axios.get('http://localhost:3005/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3005/products/${id}`)
            .then(response => {
                console.log(response.data);
                setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div className="bg-light p-5 text-center">
            <div className="container">
                <div className="row">
                    {isAdmin && <NavLink to='/products/0/edit' className='btn btn-outline-primary mb-5'>
                        Add New Product
                    </NavLink>}
                    {products.map(product => (
                        <Productsitems key={product.id} product={product} handleDelete={handleDelete} setProducts={setProducts} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;