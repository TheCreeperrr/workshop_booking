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
      // TODO: fetch from /workshop/type_tnc/:id
      setTncText("Terms and conditions for the selected workshop will appear here.");
    }
    setShowTnC(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST to Django API
  };

  return (
    <div className="px-4 max-w-xl mx-auto">

      {/* Info alert */}
      <div className="mt-4 mb-6 px-4 py-3 border border-blue-200 rounded bg-blue-50 text-blue-800 text-sm">
        Note: Before proposing the workshop, please check about the workshop in the{" "}
        <strong>Workshop Types</strong> section.
      </div>

      {/* Card */}
      <div className="border rounded-lg overflow-hidden">

        {/* Card header */}
        <div className="px-5 py-4 border-b">
          <h3 className="text-base font-semibold">Propose Workshop</h3>
        </div>

        {/* Card body */}
        <div className="px-5 py-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Workshop Type */}
            <div className="flex flex-col gap-1">
              <label htmlFor="workshop_type" className="text-sm font-medium">Workshop Type</label>
              <select
                id="workshop_type"
                name="workshop_type"
                value={form.workshop_type}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1"
              >
                <option value="">-- Select Workshop Type --</option>
                {mockWorkshopTypes.map((w) => (
                  <option key={w.id} value={w.id}>{w.name}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <label htmlFor="date" className="text-sm font-medium">Preferred Date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1"
              />
            </div>

            {/* TnC checkbox */}
            <div className="flex items-start gap-2 text-sm">
              <input
                id="tnc_accepted"
                name="tnc_accepted"
                type="checkbox"
                checked={form.tnc_accepted}
                onChange={handleChange}
                className="mt-0.5"
              />
              <label htmlFor="tnc_accepted">
                I accept the{" "}
                <a href="#" onClick={handleViewTnC} className="text-blue-600 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>

            {/* Errors */}
            {errors.length > 0 && (
              <div className="border border-red-300 rounded px-4 py-3 bg-red-50">
                <p className="text-center font-bold text-red-600 text-sm mb-2">Errors</p>
                {errors.map((err, i) => (
                  <p key={i} className="text-red-600 text-sm">{err}</p>
                ))}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 rounded text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* TnC Modal */}
      {showTnC && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4"
          onClick={() => setShowTnC(false)}
        >
          <div
            className="w-full max-w-md bg-white border rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h5 className="font-semibold text-sm">Terms and Conditions</h5>
              <button onClick={() => setShowTnC(false)}
                className="text-gray-400 hover:text-gray-700 text-xl font-bold leading-none">×</button>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700">
              <p>{tncText}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}