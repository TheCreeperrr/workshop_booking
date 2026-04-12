import { Link } from "react-router-dom";

const mockWorkshopTypes = [
  { id: 1, name: "Python", duration: 2 },
  { id: 2, name: "Scilab", duration: 1 },
  { id: 3, name: "OpenFOAM", duration: 3 },
  { id: 4, name: "DWSIM", duration: 2 },
  { id: 5, name: "R", duration: 1 },
];

export default function WorkshopTypeList({ user }) {
  const currentPage = 1;
  const totalPages = 3;

  return (
    <div className="px-4 max-w-3xl mx-auto">

      {/* Heading + Add button row */}
      <div className="flex items-center justify-between mb-4 mt-4">
        <h2 className="text-xl font-semibold">Workshop Types</h2>
        {user?.isInstructor && (
          <Link to="/workshop-types/add">
            <button className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Add Workshop Type
            </button>
          </Link>
        )}
      </div>

      {/* Table — scrollable on mobile */}
      <div className="w-full overflow-x-auto border rounded-lg">
        <table className="w-full text-sm min-w-[400px]">
          <thead>
            <tr className="border-b bg-gray-50 text-left">
              <th className="px-4 py-3 font-medium text-gray-600">Sr No</th>
              <th className="px-4 py-3 font-medium text-gray-600">Workshop Name</th>
              <th className="px-4 py-3 font-medium text-gray-600">Duration (Days)</th>
              <th className="px-4 py-3 font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockWorkshopTypes.map((w, index) => (
              <tr key={w.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-500">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{w.name}</td>
                <td className="px-4 py-3">{w.duration}</td>
                <td className="px-4 py-3">
                  <Link to={`/workshop-types/${w.id}`}>
                    <button className="px-3 py-1 text-xs border rounded border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {currentPage > 1 && (
          <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">Previous</button>
        )}
        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">Next</button>
        )}
      </div>

    </div>
  );
}