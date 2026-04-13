// WorkshopTypeList.jsx
import { Link } from "react-router-dom";

const mockWorkshopTypes = [
  { id: 1, name: "Python", duration: 2 },
  { id: 2, name: "Scilab", duration: 1 },
  { id: 3, name: "OpenFOAM", duration: 3 },
  { id: 4, name: "DWSIM", duration: 2 },
  { id: 5, name: "R", duration: 1 },
];

const FadeDivider = ({ colSpan = 4 }) => (
  <tr>
    <td colSpan={colSpan} className="p-0">
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
    </td>
  </tr>
);

export default function WorkshopTypeList({ user }) {
  const currentPage = 1;
  const totalPages = 3;

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Heading row */}
        <div className="flex items-center justify-between px-5 py-3">
          <h2 className="text-base font-semibold text-gray-700">Workshop Types</h2>
          {user?.isInstructor && (
            <Link to="/workshop-types/add">
              <button className="px-3 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Add Workshop Type
              </button>
            </Link>
          )}
        </div>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm min-w-[400px]">
            <thead>
              <tr>
                {["Sr No", "Workshop Name", "Duration (Days)", "Action"].map((h) => (
                  <th key={h} className="text-left text-gray-500 font-medium px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockWorkshopTypes.map((w, index) => (
                <>
                  <FadeDivider key={`d-${w.id}`} colSpan={4} />
                  <tr key={w.id}>
                    <td className="px-5 py-3 text-gray-500">{index + 1}</td>
                    <td className="px-5 py-3 text-gray-800 font-medium">{w.name}</td>
                    <td className="px-5 py-3 text-gray-800">{w.duration}</td>
                    <td className="px-5 py-3">
                      <Link to={`/workshop-types/${w.id}`}>
                        <button className="px-3 py-1 text-xs border rounded border-blue-400 text-blue-600 hover:bg-blue-50 transition-colors">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
        <div className="flex items-center justify-center gap-4 px-5 py-3">
          {currentPage > 1 && (
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50 text-gray-600">Previous</button>
          )}
          <span className="text-sm text-gray-500">Page {currentPage} of {totalPages}</span>
          {currentPage < totalPages && (
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50 text-gray-600">Next</button>
          )}
        </div>

      </div>
    </div>
  );
}