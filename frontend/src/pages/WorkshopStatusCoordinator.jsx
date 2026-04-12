import { Link } from "react-router-dom";

const mockUser = { first_name: "Jane" };

const mockWorkshops = [
  { id: 1, workshop_type: "Python", instructor: "Prof. Sharma", date: "2025-08-15", status: true, tnc_accepted: true, get_status: "Accepted" },
  { id: 2, workshop_type: "Scilab", instructor: "", date: "2025-09-01", status: false, tnc_accepted: true, get_status: "Pending" },
];

const FadeDivider = ({ colSpan = 4 }) => (
  <tr>
    <td colSpan={colSpan} className="p-0">
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
    </td>
  </tr>
);

export default function WorkshopStatusCoordinator({ user }) {
  const workshops = mockWorkshops;
  const acceptedWorkshops = workshops.filter((w) => w.status);
  const proposedWorkshops = workshops.filter((w) => !w.status && w.tnc_accepted);

  if (!workshops.length) {
    return (
      <div className="flex flex-col items-center mt-10 px-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Welcome {user?.first_name || mockUser.first_name}</h1>
          <p className="text-gray-600">
            Information related to your workshops will be shown here. You can also propose
            a workshop as per your available date in the <strong>Propose Workshop</strong> tab.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10 px-4 gap-8">
      <h3 className="text-2xl font-bold text-gray-700">Workshop Status</h3>

      {/* Accepted workshops */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <h3 className="text-base font-semibold text-gray-700 px-5 py-3 text-center">Workshops Accepted</h3>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
        <table className="w-full">
          <thead>
            <tr>
              {["Workshop", "Instructor", "Day", "Status"].map((h) => (
                <th key={h} className="text-left text-gray-500 font-medium px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {acceptedWorkshops.length === 0 ? (
              <tr><td colSpan={4} className="px-5 py-3 text-gray-500">No accepted workshops</td></tr>
            ) : (
              acceptedWorkshops.map((w, i) => (
                <>
                  <FadeDivider key={`d-${w.id}`} colSpan={4} />
                  <tr key={w.id}>
                    <td className="px-5 py-3"><Link to={`/workshop/${w.id}`} className="text-blue-600 hover:underline">{w.workshop_type}</Link></td>
                    <td className="px-5 py-3 text-gray-800">{w.instructor}</td>
                    <td className="px-5 py-3 text-gray-800">{w.date}</td>
                    <td className="px-5 py-3"><span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">{w.get_status}</span></td>
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Proposed workshops */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <h3 className="text-base font-semibold text-gray-700 px-5 py-3 text-center">Workshops Proposed By You</h3>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
        <table className="w-full">
          <thead>
            <tr>
              {["Workshop", "Day", "Status"].map((h) => (
                <th key={h} className="text-left text-gray-500 font-medium px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {proposedWorkshops.length === 0 ? (
              <tr><td colSpan={3} className="px-5 py-3 text-gray-500">No pending proposals</td></tr>
            ) : (
              proposedWorkshops.map((w, i) => (
                <>
                  <FadeDivider key={`d-${w.id}`} colSpan={3} />
                  <tr key={w.id}>
                    <td className="px-5 py-3"><Link to={`/workshop/${w.id}`} className="text-blue-600 hover:underline">{w.workshop_type}</Link></td>
                    <td className="px-5 py-3 text-gray-800">{w.date}</td>
                    <td className="px-5 py-3"><span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded-full">{w.get_status}</span></td>
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}