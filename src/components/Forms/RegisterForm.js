import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const RegisterForm = ({ setUser }) => {
  const navigate = useNavigate(); // Initializing useNavigate hook for navigation

  // Validation function for registration form
  const validateRegistrationForm = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 20) {
      errors.username = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must match";
    }

    return errors;
  };

  // Handle registration form submission
  const handleRegistrationSubmit = (values, { setSubmitting }) => {
    // Simulate registration process (replace with actual backend API call)
    setTimeout(() => {
      setUser(values.username); // Set user in parent component (simulate login)
      setSubmitting(false); // Set submitting state to false
      navigate("/"); // Navigate to home page after registration
    }, 400);
  };

  return (
    <div className="wrapper">
      <h2>Register</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validate={validateRegistrationForm}
        onSubmit={handleRegistrationSubmit}
      >
        <Form>
          <div className="input-box">
            <Field
              id="firstName"
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="input-box">
            <Field
              id="lastName"
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="input-box">
            <Field
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="input-box">
            <Field
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="input-box">
            <Field
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="input-box">
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;
