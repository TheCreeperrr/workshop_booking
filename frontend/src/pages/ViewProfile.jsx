import { Link } from "react-router-dom";

// Mirrors view_profile.html:
// If profile complete (Workshops exist):
//   Profile info table: First name | Last name | Email | Institute | Phone | Department | Location | Position
//   Workshop Details table: Instructor Name | Workshop Date | Workshop Type
//     — if no instructor assigned: "Pending" badge instead of name
// If profile incomplete (no workshops yet):
//   Inline edit form with fields: Title, First name, Last name, Phone, Institute, Department, Position, Location, State
//   Update + Cancel buttons

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

export default function ViewProfile() {
  const profile = mockProfile;
  const workshops = mockWorkshops;

  // Profile is complete — show read-only view
  if (workshops.length > 0) {
    return (
      <div className="page-container">

        {/* Profile info table */}
        <div className="table-wrapper">
          <table className="table table--bordered">
            <tbody>
              <tr><th>First name:</th><td>{profile.first_name}</td></tr>
              <tr><th>Last name:</th><td>{profile.last_name}</td></tr>
              <tr><th>Email:</th><td>{profile.email}</td></tr>
              <tr><th>Institute:</th><td>{profile.institute}</td></tr>
              <tr><th>Phone Number:</th><td>{profile.phone_number}</td></tr>
              <tr><th>Department:</th><td>{profile.department}</td></tr>
              <tr><th>Location:</th><td>{profile.location}</td></tr>
              <tr><th>Position:</th><td>{profile.position}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Workshop history */}
        <h2 className="section-heading">Workshop Details</h2>
        <div className="table-wrapper">
          <table className="table table--bordered">
            <thead>
              <tr>
                <th>Instructor Name</th>
                <th>Workshop Date</th>
                <th>Workshop Type</th>
              </tr>
            </thead>
            <tbody>
              {workshops.map((w) => (
                <tr key={w.id}>
                  <td>
                    {w.instructor
                      ? w.instructor
                      : <span className="badge badge--warning">Pending</span>
                    }
                  </td>
                  <td>{w.date}</td>
                  <td>{w.workshop_type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    );
  }

  // Profile incomplete — show edit form
  return <EditProfileInline />;
}

// Inline edit form shown when profile not yet set up
function EditProfileInline() {
  return (
    <div className="page-container">
      <div className="form-centered">
        <form className="form">
          <div className="table-wrapper">
            <table className="table">
              <tbody>
                {["Title", "First Name", "Last Name", "Phone Number", "Institute",
                  "Department", "Position", "Location", "State"].map((field) => (
                  <tr key={field}>
                    <td>
                      <div className="form-group">
                        <label>{field}</label>
                        <input type="text" className="form-input" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn--success">Update</button>
            <Link to="/"><button type="button" className="btn btn--primary">Cancel</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}