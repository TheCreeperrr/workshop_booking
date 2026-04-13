import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fields = [
    { id: "username",    label: "Username",         type: "text" },
    { id: "email",       label: "Email",            type: "email" },
    { id: "first_name",  label: "First Name",       type: "text" },
    { id: "last_name",   label: "Last Name",        type: "text" },
    { id: "password1",   label: "Password",         type: "password" },
    { id: "password2",   label: "Confirm Password", type: "password" },
  ];

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">

        <h2 className="text-base font-semibold text-gray-700 px-5 py-3 text-center">Coordinator Registration</h2>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5 py-5">
          {fields.map((f) => (
            <div key={f.id} className="flex flex-col gap-1">
              <label htmlFor={f.id} className="text-sm text-gray-500 font-medium">
                {f.label} <span className="text-red-500">*</span>
              </label>
              <input id={f.id} name={f.id} type={f.type}
                value={form[f.id]} onChange={handleChange}
                className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400" />
            </div>
          ))}

          <button type="submit"
            className="w-full py-1.5 px-4 rounded text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors mt-1">
            Register
          </button>
        </form>

      </div>
    </div>
  );
}