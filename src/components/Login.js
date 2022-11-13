import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../customHooks/useAuth";
import { Navigate, Link } from "react-router-dom";

function Login() {
  // hooks
  const { user, login } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    await login(values);
    resetForm();
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="signup-form">
      <h1 className="register-heading">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <input
              name="email"
              className="input-box"
              type="email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error">Email is Required</p>
            )}
            <input
              name="password"
              className="input-box"
              type="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error">Password is Required</p>
            )}
            <button
              className="input-btn"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Login
            </button>
            <div className="signup-link">
              <Link to="/signup">Don't Have An Account</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
