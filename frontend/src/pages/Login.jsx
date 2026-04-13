import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">

        <h2 className="text-base font-semibold text-gray-700 px-5 py-3 text-center">Account Login</h2>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />

        {errors.map((err, i) => (
          <div key={i} className="flex items-center justify-between px-5 py-3 bg-red-50 text-red-700 text-sm border-b border-red-100">
            <span>{err}</span>
            <button onClick={() => setErrors(errors.filter((_, j) => j !== i))} className="ml-3 text-red-500 hover:text-red-700 font-bold">×</button>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5 py-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm text-gray-500 font-medium">Username</label>
            <input id="username" name="username" type="text" autoComplete="username"
              value={form.username} onChange={handleChange}
              className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-500 font-medium">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password"
              value={form.password} onChange={handleChange}
              className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400" />
          </div>

          <button type="submit"
            className="w-full py-1.5 px-4 rounded text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Sign in
          </button>

          <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />

          <div className="flex flex-col gap-2">
            <Link to="/register" className="text-sm text-blue-600 hover:underline">New around here? Register Here</Link>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
          </div>
        </form>

      </div>
    </div>
  );
}