import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.token) {
        window.localStorage.setItem('authToken', data.token);
        window.location.href = 'http://localhost:5000'; // redirect
      } else {
        setError(
          data.message ||
            'Login failed. Please check your credentials and try again.'
        );
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <form
            className="p-4 border rounded shadow bg-white"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center text-primary mb-4">Login</h2>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                className="form-control"
                name="username"
                type="email"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
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
            </div>

            {error && (
              <div className="alert alert-danger py-2 text-center">{error}</div>
            )}

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary w-50 me-2">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary w-50"
                onClick={() => (window.location.href = '/')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
