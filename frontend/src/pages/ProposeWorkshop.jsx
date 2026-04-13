import { useState } from "react";

const mockWorkshopTypes = [
  { id: 1, name: "Python" },
  { id: 2, name: "Scilab" },
  { id: 3, name: "OpenFOAM" },
  { id: 4, name: "DWSIM" },
];

export default function ProposeWorkshop() {
  const [form, setForm] = useState({ workshop_type: "", date: "", tnc_accepted: false });
  const [errors, setErrors] = useState([]);
  const [showTnC, setShowTnC] = useState(false);
  const [tncText, setTncText] = useState("");

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleViewTnC = (e) => {
    e.preventDefault();
    if (!form.workshop_type) {
      setTncText("Please select a workshop type first.");
    } else {
      setTncText("Terms and conditions for the selected workshop will appear here.");
    }
    setShowTnC(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4 gap-4">

      {/* Info alert */}
      <div className="w-full max-w-md px-4 py-3 border border-blue-200 rounded-lg bg-blue-50 text-blue-800 text-sm">
        Note: Before proposing the workshop, please check about the workshop in the{" "}
        <strong>Workshop Types</strong> section.
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-base font-semibold text-gray-700 px-5 py-3">Propose Workshop</h2>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5 py-5">

          <div className="flex flex-col gap-1">
            <label htmlFor="workshop_type" className="text-sm text-gray-500 font-medium">Workshop Type</label>
            <select id="workshop_type" name="workshop_type" value={form.workshop_type} onChange={handleChange}
              className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400">
              <option value="">-- Select Workshop Type --</option>
              {mockWorkshopTypes.map((w) => (
                <option key={w.id} value={w.id}>{w.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-sm text-gray-500 font-medium">Preferred Date</label>
            <input id="date" name="date" type="date" value={form.date} onChange={handleChange}
              className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400" />
          </div>

          <div className="flex items-start gap-2 text-sm">
            <input id="tnc_accepted" name="tnc_accepted" type="checkbox"
              checked={form.tnc_accepted} onChange={handleChange} className="mt-0.5" />
            <label htmlFor="tnc_accepted" className="text-gray-600">
              I accept the{" "}
              <a href="#" onClick={handleViewTnC} className="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>

          {errors.length > 0 && (
            <div className="border border-red-200 rounded px-4 py-3 bg-red-50">
              <p className="text-center font-bold text-red-600 text-sm mb-2">Errors</p>
              {errors.map((err, i) => (
                <p key={i} className="text-red-600 text-sm">{err}</p>
              ))}
            </div>
          )}

          <button type="submit"
            className="w-full py-1.5 px-4 rounded text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors mt-1">
            Submit
          </button>
        </form>
      </div>

      {/* TnC Modal */}
      {showTnC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4"
          onClick={() => setShowTnC(false)}>
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h5 className="text-base font-semibold text-gray-700">Terms and Conditions</h5>
              <button onClick={() => setShowTnC(false)}
                className="text-gray-400 hover:text-gray-700 text-xl font-bold leading-none">×</button>
            </div>
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
            <p className="px-5 py-4 text-sm text-gray-700">{tncText}</p>
          </div>
        </div>
      )}

    </div>
  );
}