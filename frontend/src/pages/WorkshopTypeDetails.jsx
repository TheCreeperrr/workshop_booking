// Mirrors workshop_type_details.html:
// "Workshop Details" heading centered
// Table (key-value layout):
//   Workshop Name | <value>
//   Duration      | X day(s)
//   Description   | <value>
//   Terms & Cond. | <value>

const mockWorkshopType = {
  name: "Python",
  duration: 2,
  description: "An introductory workshop on Python programming covering basics to intermediate topics.",
  terms_and_conditions: "Participants must bring their own laptops. The college must provide a projector and lab space.",
};

export default function WorkshopTypeDetails() {
  const workshop = mockWorkshopType;

  return (
    <div className="page-container">
      <h2 className="page-heading">Workshop Details</h2>

      <div className="table-wrapper">
        <table className="table table--hover">
          <tbody>
            <tr>
              <th>Workshop Name :</th>
              <td>{workshop.name}</td>
            </tr>
            <tr>
              <th>Duration :</th>
              <td>{workshop.duration} day(s)</td>
            </tr>
            <tr>
              <th>Description :</th>
              <td>{workshop.description}</td>
            </tr>
            <tr>
              <th>Terms and Conditions :</th>
              <td>{workshop.terms_and_conditions}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}