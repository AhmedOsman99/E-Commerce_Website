import React, { useEffect, useState } from "react";
import { Productsitems } from "./Productsitems";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/productsSlice";

export function Products() {
  // const [products, setProducts] = useState([]);

  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.users.user);
  const isAdmin = user?.admin;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // useEffect(() => {
  //     axios.get('http://localhost:3005/products')
  //         .then(response => {
  //             setProducts(response.data);
  //         })
  //         .catch(error => {
  //             console.error(error);
  //         });
  // }, []);

  // const handleDelete = (id) => {
  //     axios.delete(`http://localhost:3005/products/${id}`)
  //         .then(response => {
  //             console.log(response.data);
  //             setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  //         })
  //         .catch(error => {
  //             console.error(error);
  //         });
  // };

  return (
    <div
      className="products bg-light p-5 text-center"
      style={{
        background: "linear-gradient(to bottom left, #000000, #7c7c7c)",
      }}
    >
      <div className="container">
        <div className="row">
          {isAdmin && (
            <NavLink to="/products/0/edit" className="btn btn-primary mb-5">
              Add New Product
            </NavLink>
          )}
          {products.map((product) => (
            <Productsitems
              key={product.id}
              product={product}
              dispatch={dispatch}
              isAdmin={isAdmin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// handleDelete={handleDelete} setProducts={setProducts}
