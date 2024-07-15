import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = ({ setUser }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Validation function for login form
  const validateLoginForm = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 20) {
      errors.username = "Must be 20 character or less";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  const handleLoginSubmit = (values, { setSubmitting }) => {
    // Simulate login process (replace with actual backend API call)
    setTimeout(() => {
      setUser(values.username); // Store user's username
      setSubmitting(false);
      navigate("/") // Redirect to home after login
    }, 400);
  };

  return (
    <div className="wrapper">
      <h2>Login</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={validateLoginForm}
        onSubmit={handleLoginSubmit}
      >
        <Form>
          <div className="input-box">
            <Field
              id="username"
              name="username"
              type="username"
              className="form-control"
              placeholder="Username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger"
            />
            <i className="bx bxs-user"></i>
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
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="register-btn">
                Register
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
