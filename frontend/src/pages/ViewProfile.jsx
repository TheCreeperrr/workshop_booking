import { Link } from "react-router-dom";

const mockProfile = {
  first_name: "Jane",
  last_name: "Doe",
  email: "jane@example.com",
  institute: "IIT Bombay",
  phone_number: "9876543210",
  department: "Computer Science",
  location: "Mumbai",
  position: "coordinator",
};

const mockWorkshops = [
  { id: 1, instructor: "Prof. Sharma", date: "2025-08-15", workshop_type: "Python" },
  { id: 2, instructor: null, date: "2025-09-10", workshop_type: "Scilab" },
];

const FadeDivider = () => (
  <tr>
    <td colSpan={3} className="p-1">
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
    </td>
  </tr>
);

export default function ViewProfile() {
  const profile = mockProfile;
  const workshops = mockWorkshops;

  const profileRows = [
    ["First name", profile.first_name],
    ["Last name", profile.last_name],
    ["Email", profile.email],
    ["Institute", profile.institute],
    ["Phone Number", profile.phone_number],
    ["Department", profile.department],
    ["Location", profile.location],
    ["Position", profile.position],
  ];

  const workshopHeaders = ["Instructor Name", "Workshop Date", "Workshop Type"];

  if (workshops.length > 0) {
    return (
      <div className="flex flex-col items-center mt-10 px-4 gap-8">
        <div class="text-3xl font-bold text-gray-700">{profileRows[0][1]} {profileRows[1][1]}</div>
        {/* Profile info */}
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden ">
          <div className="w-full max-w-xl bg-white rounded-lg shadow-sm overflow-hidden">
            <h2 className="text-base font-semibold text-gray-700 px-5 py-3">User Details</h2>
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
          </div>
          <table className="w-full">
            <tbody>
              {profileRows.map(([label, value], i) => (
                <>
                  <tr key={label}>
                    <th className="text-left text-gray-500 font-medium px-5 py-3 w-1/3">{label}</th>
                    <td className="text-gray-800 px-5 py-3">{value}</td>
                  </tr>
                  {i < profileRows.length - 1 && <FadeDivider />}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Workshop history */}
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-base font-semibold text-gray-700 px-5 py-3">Workshop Details</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <table className="w-full">
            <thead>
              <tr>
                {workshopHeaders.map((h) => (
                  <th key={h} className="text-left text-gray-500 font-medium px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {workshops.map((w, i) => (
                <>
                  <tr key={w.id}>
                    <td className="px-5 py-3 text-gray-800">
                      {w.instructor ?? (
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded-full">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-gray-800">{w.date}</td>
                    <td className="px-5 py-3 text-gray-800">{w.workshop_type}</td>
                  </tr>
                  {i < workshops.length - 1 && <FadeDivider />}
                </>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    );
  }

  return <EditProfileInline />;
}

function EditProfileInline() {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-sm overflow-hidden">
        <form>
          <table className="w-full">
            <tbody>
              {["Title", "First Name", "Last Name", "Phone Number", "Institute",
                "Department", "Position", "Location", "State"].map((field, i, arr) => (
                  <>
                    <tr key={field}>
                      <td className="px-5 py-3">
                        <label className="block text-sm text-gray-500 mb-1">{field}</label>
                        <input type="text" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                      </td>
                    </tr>
                    {i < arr.length - 1 && <FadeDivider />}
                  </>
                ))}
            </tbody>
          </table>
          <div className="flex gap-3 px-5 py-4">
            <button type="submit" className="bg-green-600 text-white text-sm px-4 py-1.5 rounded hover:bg-green-700">Update</button>
            <Link to="/"><button type="button" className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700">Cancel</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}