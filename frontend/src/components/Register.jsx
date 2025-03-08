import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./register.css";
import { useDispatch } from "react-redux";
import { adduser } from "../slice/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      dob: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      dob: Yup.date().required("Date of Birth is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      dispatch(adduser(values));
      resetForm();
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
      <div className="mask d-flex align-items-center justify-content-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-2">Register Here</h2>

                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="name"
                        name="name"
                        className="form-control form-control-lg"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="form-label">Your Name</label>
                      {formik.touched.name && formik.errors.name && (
                        <div className="text-danger">{formik.errors.name}</div>
                      )}
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="form-label">Your Email</label>
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="form-label">Password</label>
                      {formik.touched.password && formik.errors.password && (
                        <div className="text-danger">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="date"
                        name="dob"
                        className="form-control form-control-lg"
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="form-label">Your dob</label>
                      {formik.touched.dob && formik.errors.dob && (
                        <div className="text-danger">{formik.errors.dob}</div>
                      )}
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-2 mb-0">
                      Don't have an account?{" "}
                      <a href="/login" className="fw-bold text-body">
                        <u>Login here</u>
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

export default Register;
