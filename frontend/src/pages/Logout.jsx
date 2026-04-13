import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 gap-4 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Are you sure you want to log out?
        </h3>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700"
          >
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
}