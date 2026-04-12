import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to Django auth endpoint
  };

  return (
    <div className="min-h-screen px-4 flex items-start justify-center">
      <div className="w-full max-w-md border rounded-lg overflow-hidden mt-6">

        {/* Error alerts */}
        {errors.map((err, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 border-b bg-red-50 text-red-700 text-sm">
            <span>{err}</span>
            <button onClick={() => setErrors(errors.filter((_, j) => j !== i))}
              className="ml-3 text-red-500 hover:text-red-700 font-bold">×</button>
          </div>
        ))}

        <div className="px-6 py-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Username */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm font-medium">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={form.username}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <hr className="my-4" />

          {/* Links */}
          <div className="flex flex-col gap-2">
            <Link to="/register" className="text-sm text-blue-600 hover:underline">
              New around here? Sign up
            </Link>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}