import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login} from './../Redux/userSlice'

export function Registeration() {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  let [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let [formErrors, setFormErrors] = useState({
    userNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  let operationHandler = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (formValues.userName.trim() === "") {
      errors.userNameError = "Username is required.";
    }

    if (formValues.email.trim() === "") {
      errors.emailError = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.emailError = "Invalid email address.";
    }

    if (formValues.password.length < 6) {
      errors.passwordError = "Weak Password";
    }

    if (formValues.confirmPassword !== formValues.password) {
      errors.confirmPasswordError = "Passwords do not match.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  let { confirmPassword, ...rest } = formValues;

  let register = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios.post("http://localhost:3005/users", rest).then((res) => {
        dispatch(login(res.data))
        navigate("/home");
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 p-3 m-3 mt-5">
      <form className="register form">
        <div className="row">
          <div className="col">
            <div className="form-group mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="userName"
                value={formValues.userName}
                onChange={operationHandler}
              />
              {formErrors.userNameError ? (
                <small className="text-danger">
                  {formErrors.userNameError}
                </small>
              ) : (
                <small style={{ visibility: "hidden" }}>
                  Username is required.
                </small>
              )}
            </div>

            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formValues.email}
                onChange={operationHandler}
              />
              {formErrors.emailError ? (
                <small className="text-danger">{formErrors.emailError}</small>
              ) : (
                <small style={{ visibility: "hidden" }}>
                  Email is required.
                </small>
              )}
            </div>
          </div>

          <div className="col">
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={operationHandler}
              />
              {formErrors.passwordError ? (
                <small className="text-danger">
                  {formErrors.passwordError}
                </small>
              ) : (
                <small style={{ visibility: "hidden" }}>Weak Password.</small>
              )}
            </div>

            <div className="form-group mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={operationHandler}
              />
              {formErrors.confirmPasswordError ? (
                <small className="text-danger">
                  {formErrors.confirmPasswordError}
                </small>
              ) : (
                <small style={{ visibility: "hidden" }}>Weak Password.</small>
              )}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-dark w-100 mt-3"
          onClick={register}
        >
          Register
        </button>
      </form>
    </div>
  );
}
