import { useNavigate } from "react-router-dom";

const mockWorkshopType = {
  name: "Python",
  duration: 2,
  description: "An introductory workshop on Python programming covering basics to intermediate topics.",
  terms_and_conditions: "Participants must bring their own laptops. The college must provide a projector and lab space.",
};

const FadeDivider = () => (
  <tr>
    <td colSpan={2} className="p-0">
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
    </td>
  </tr>
);

export default function WorkshopTypeDetails() {
  const workshop = mockWorkshopType;
  const navigate = useNavigate();

  const rows = [
    ["Workshop Name", workshop.name],
    ["Duration", `${workshop.duration} day(s)`],
    ["Description", workshop.description],
    ["Terms and Conditions", workshop.terms_and_conditions],
  ];

  return (
    <div className="flex flex-col items-center mt-10 px-4">

      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-base text-gray-500 hover:text-gray-800 mb-4 self-start pl-4 pt-2">
          <span>&#8592;</span> Back
        </button>
        <h2 className="text-center font-bold text-2xl text-gray-700 px-5 py-3">Workshop Details</h2>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #d1d5db 8%, #d1d5db 92%, transparent)' }} />
        <table className="w-full">
          <tbody>
            {rows.map(([label, value], i) => (
              <>
                <tr key={label}>
                  <th className="text-left text-gray-500 font-medium px-5 py-3 w-1/3 align-top">{label}</th>
                  <td className="text-gray-800 px-5 py-3">{value}</td>
                </tr>
                {i < rows.length - 1 && <FadeDivider />}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}