import { useEffect } from "react";
import { Link } from "react-router-dom";

// Mirrors activation.html — 4 states:
// "pending"  → "Activation Awaiting" jumbotron, auto-logout after 5s
// "0"        → "Account activated" jumbotron with link to home
// "1"        → "Activation expired" jumbotron, auto-redirect to register after 3s
// "2"        → "Email already verified" jumbotron with link to home

export default function Activation({ status = "pending" }) {
  useEffect(() => {
    if (status === "1") {
      const timer = setTimeout(() => {
        window.location.href = "/register";
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (status === "pending") {
      const timer = setTimeout(() => {
        window.location.href = "/logout";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="page-container">
      <div className="jumbotron">
        {status === "pending" && (
          <>
            <h1>Activation Awaiting</h1>
            <p>
              The activation link has been sent to your email. The link expires in{" "}
              <strong>24 hours</strong> from the date of registration.
              You will be logged out automatically.
            </p>
          </>
        )}
        {status === "0" && (
          <p>
            Your account has been activated. Click{" "}
            <Link to="/">here</Link> to continue.
          </p>
        )}
        {status === "1" && (
          <p>Your activation has expired. Please register again. Redirecting...</p>
        )}
        {status === "2" && (
          <p>
            Your email is already verified. Click{" "}
            <Link to="/">here</Link> to continue.
          </p>
        )}
      </div>
    </div>
  );
}