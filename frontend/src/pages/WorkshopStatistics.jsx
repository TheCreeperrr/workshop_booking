import { Link } from "react-router-dom";

const mockStats = {
  total: 18,
  byYou: 5,
  byType: [
    { name: "Python", count: 6 },
    { name: "Scilab", count: 4 },
    { name: "OpenFOAM", count: 3 },
    { name: "DWSIM", count: 3 },
    { name: "R", count: 2 },
  ],
};

const FadeDivider = ({ colSpan = 2 }) => (
  <tr>
    <td colSpan={colSpan} className="p-0">
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
    </td>
  </tr>
);

export default function WorkshopStatistics() {
  return (
    <div className="flex flex-col items-center mt-10 px-4 gap-8">

      {/* Summary cards */}
      <div className="text-2xl font-bold text-gray-700">Workshop Statistics</div>
      <div className="w-full max-w-xl flex gap-4">
        <div className="flex-1 bg-white rounded-lg shadow-lg px-5 py-4 text-center">
          <p className="text-sm text-gray-500 font-medium mb-1">Total Conducted</p>
          <p className="text-3xl font-semibold text-gray-800">{mockStats.total}</p>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-lg px-5 py-4 text-center">
          <p className="text-sm text-gray-500 font-medium mb-1">By You</p>
          <p className="text-3xl font-semibold text-gray-800">{mockStats.byYou}</p>
        </div>
      </div>

      {/* Per type table */}
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-center font-semibold text-gray-700 px-5 py-3">Workshops by Type</h2>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-gray-500 font-medium px-5 py-3">Type</th>
              <th className="text-left text-gray-500 font-medium px-5 py-3">Count</th>
            </tr>
          </thead>
          <tbody>
            {mockStats.byType.map((t, i) => (
              <>
                <FadeDivider key={`d-${i}`} colSpan={2} />
                <tr key={t.name}>
                  <td className="px-5 py-3 text-gray-800">{t.name}</td>
                  <td className="px-5 py-3 text-gray-800">{t.count}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}