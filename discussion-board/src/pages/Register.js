import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    givenName: '',
    familyName: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!/^\S+@\S+\.\S+$/.test(form.username)) {
      errs.username = 'Invalid email address';
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)) {
      errs.password = 'Password must be 8+ chars, include upper, lower, digit';
    }
    if (!form.givenName) errs.givenName = 'Required';
    if (!form.familyName) errs.familyName = 'Required';
    if (
      !/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        form.phone
      )
    ) {
      errs.phone = 'Invalid phone number';
    }
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      try {
        const res = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: form.username,
            password: form.password,
            givenName: form.givenName,
            familyName: form.familyName,
            phone: form.phone
          })
        });
        const data = await res.json();
        if (res.ok && data.success) {
          window.location.href = '/login';
        } else {
          setErrors({
            ...errs,
            form: data.message || 'Registration failed. Please try again.'
          });
        }
      } catch (error) {
        setErrors({
          ...errs,
          form: 'Network error. Please try again.'
        });
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <form
            className="p-4 border rounded shadow bg-white"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center text-primary mb-4">Register</h2>
            {errors.form && (
              <div className="alert alert-danger text-center">{errors.form}</div>
            )}
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                className="form-control"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              {errors.username && (
                <div className="text-danger small">{errors.username}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                className="form-control"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <div className="text-danger small">{errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Given Name:</label>
              <input
                className="form-control"
                name="givenName"
                value={form.givenName}
                onChange={handleChange}
                placeholder="Enter your given name"
                required
              />
              {errors.givenName && (
                <div className="text-danger small">{errors.givenName}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Family Name:</label>
              <input
                className="form-control"
                name="familyName"
                value={form.familyName}
                onChange={handleChange}
                placeholder="Enter your family name"
                required
              />
              {errors.familyName && (
                <div className="text-danger small">{errors.familyName}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Phone:</label>
              <input
                className="form-control"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
              {errors.phone && (
                <div className="text-danger small">{errors.phone}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
