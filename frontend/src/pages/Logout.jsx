import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="flex flex-col items-center mt-24 gap-2">
      <h3 className="text-xl font-semibold text-gray-800">
        You have logged out successfully.
      </h3>
      <h4 className="text-base text-gray-600">
        If you want to login again please{" "}
        <Link to="/login" className="text-blue-600 underline hover:text-blue-800">
          click here
        </Link>
      </h4>
    </div>
  );
}