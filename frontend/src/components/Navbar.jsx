import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-gray-900">

      {/* Single row: brand | links | user — all on one line on desktop */}
      <div className="flex items-center justify-between px-4 h-12">

        {/* Brand */}
        <Link to="/" className="text-white font-semibold text-sm whitespace-nowrap mr-4">
          FOSSEE Workshops
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <ul className="flex items-center">
            <li>
              <Link to="/" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/statistics" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Workshop Statistics</Link>
            </li>
            {user?.isAuthenticated && (
              <>
                {user.isInstructor && (
                  <li>
                    <Link to="/statistics/team" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Team Statistics</Link>
                  </li>
                )}
                <li>
                  <Link to="/workshop-status" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Workshop Status</Link>
                </li>
                {!user.isInstructor && (
                  <li>
                    <Link to="/propose-workshop" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Propose Workshop</Link>
                  </li>
                )}
                <li>
                  <Link to="/workshop-types" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Workshop Types</Link>
                </li>
              </>
            )}
          </ul>

          {/* Right side: user or login */}
          {user?.isAuthenticated ? (
            <ul className="flex items-center">
              
              <li><Link to="/profile" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Profile</Link></li>
              {/*<li><Link to="/change-password" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Change Password</Link></li>*/}
              <li><Link to="/logout" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Logout</Link></li>
            </ul>
          ) : (
            <ul className="flex items-center">
              <li><Link to="/login" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Login</Link></li>
              <li><Link to="/register" className="px-3 py-1 text-sm text-gray-300 hover:text-white">Register</Link></li>
            </ul>
          )}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 border-t border-gray-700">
          <ul className="flex flex-col">
            <li><Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Home</Link></li>
            <li><Link to="/statistics" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Workshop Statistics</Link></li>
            {user?.isAuthenticated && (
              <>
                {user.isInstructor && (
                  <li><Link to="/statistics/team" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Team Statistics</Link></li>
                )}
                <li><Link to="/workshop-status" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Workshop Status</Link></li>
                {!user.isInstructor && (
                  <li><Link to="/propose-workshop" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Propose Workshop</Link></li>
                )}
                <li><Link to="/workshop-types" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Workshop Types</Link></li>
              </>
            )}
          </ul>
          <div className="border-t border-gray-700 mt-2 pt-2">
            {user?.isAuthenticated ? (
              <ul className="flex flex-col">
                <li className="py-1 text-sm font-medium text-white">{user.fullName}</li>
                <li><Link to="/profile" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Profile</Link></li>
                {/*<li><Link to="/change-password" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Change Password</Link></li>*/}
                <li><Link to="/logout" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Logout</Link></li>
              </ul>
            ) : (
              <ul className="flex flex-col">
                <li><Link to="/login" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Login</Link></li>
                <li><Link to="/register" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-300">Register</Link></li>
              </ul>
            )}
          </div>
        </div>
      )}

    </nav>
  );
}