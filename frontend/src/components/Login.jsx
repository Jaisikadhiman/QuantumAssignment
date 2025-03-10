import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./register.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../slice/userSlice";
import { MdAlternateEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      dispatch(loginUser(values));
      resetForm(); // Reset form after submission
    },
  });

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Login Here
                  </h2>

                  <form onSubmit={formik.handleSubmit}>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        <MdAlternateEmail />
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label">Your Email</label>
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        <TbLockPassword />
                      </span>
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">Password</label>
                      {formik.touched.password && formik.errors.password && (
                        <div className="text-danger">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account?{" "}
                      <a href="/" className="fw-bold text-body">
                        <u>Register here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
