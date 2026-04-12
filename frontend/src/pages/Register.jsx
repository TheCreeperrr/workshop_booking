import { useState } from "react";

// Mirrors register.html:
// "Coordinator Registration Form" heading
// Full table-style form with all fields
// All fields full-width, stacked, labels above inputs
// Required fields marked with * (red)
// Register button at bottom

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to Django register endpoint
  };

  return (
    <div className="page-container">
      <h3 className="page-heading">Coordinator Registration Form</h3>

      <form className="form" onSubmit={handleSubmit}>
        <table className="form-table">
          <tbody>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="username" className="label--required">Username</label>
                  <input id="username" name="username" type="text" className="form-input"
                    value={form.username} onChange={handleChange} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="email" className="label--required">Email</label>
                  <input id="email" name="email" type="email" className="form-input"
                    value={form.email} onChange={handleChange} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="first_name" className="label--required">First Name</label>
                  <input id="first_name" name="first_name" type="text" className="form-input"
                    value={form.first_name} onChange={handleChange} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="last_name" className="label--required">Last Name</label>
                  <input id="last_name" name="last_name" type="text" className="form-input"
                    value={form.last_name} onChange={handleChange} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="password1" className="label--required">Password</label>
                  <input id="password1" name="password1" type="password" className="form-input"
                    value={form.password1} onChange={handleChange} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="password2" className="label--required">Confirm Password</label>
                  <input id="password2" name="password2" type="password" className="form-input"
                    value={form.password2} onChange={handleChange} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="btn btn--primary">
          Register
        </button>
      </form>
    </div>
  );
}