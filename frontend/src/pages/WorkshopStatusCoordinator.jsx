import { Link } from "react-router-dom";

// Mirrors workshop_status_coordinator.html:
// If no workshops: Jumbotron welcome message with instructions
// If workshops exist:
//   "The status of your workshops" heading
//   Section 1: "Workshops Accepted" — table: Name (link) | Instructor | Date | Status badge (green)
//   Section 2: "Workshops Proposed By Me" — table: Name (link) | Date | Status badge (yellow)

const mockUser = { first_name: "Jane" };

const mockWorkshops = [
  { id: 1, workshop_type: "Python", instructor: "Prof. Sharma", date: "2025-08-15", status: true, tnc_accepted: true, get_status: "Accepted" },
  { id: 2, workshop_type: "Scilab", instructor: "", date: "2025-09-01", status: false, tnc_accepted: true, get_status: "Pending" },
];

export default function WorkshopStatusCoordinator({ user }) {
  const workshops = mockWorkshops;
  const acceptedWorkshops = workshops.filter((w) => w.status);
  const proposedWorkshops = workshops.filter((w) => !w.status && w.tnc_accepted);

  if (!workshops.length) {
    return (
      <div className="page-container">
        <div className="jumbotron">
          <h1>Welcome {user?.first_name || mockUser.first_name}</h1>
          <p>
            Information related to your workshops will be shown here. You can also propose
            a workshop as per your available date in the <strong>Propose Workshop</strong> tab.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h3 className="page-heading">The status of your workshops</h3>

      {/* Accepted workshops */}
      <section className="workshop-section">
        <h3 className="section-heading section-heading--accent">Workshops Accepted</h3>
        <div className="table-wrapper">
          <table className="table table--striped">
            <thead>
              <tr>
                <th>Workshop Name</th>
                <th>Instructor Name</th>
                <th>Workshop Day</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {acceptedWorkshops.length === 0 ? (
                <tr><td colSpan={4}>No accepted workshops</td></tr>
              ) : (
                acceptedWorkshops.map((w) => (
                  <tr key={w.id}>
                    <td><Link to={`/workshop/${w.id}`}>{w.workshop_type}</Link></td>
                    <td>{w.instructor}</td>
                    <td>{w.date}</td>
                    <td><span className="badge badge--success">{w.get_status}</span></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Proposed workshops */}
      <section className="workshop-section">
        <h3 className="section-heading section-heading--accent">Workshops Proposed By Me</h3>
        <div className="table-wrapper">
          <table className="table table--striped">
            <thead>
              <tr>
                <th>Workshop Name</th>
                <th>Workshop Day</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {proposedWorkshops.length === 0 ? (
                <tr><td colSpan={3}>No pending proposals</td></tr>
              ) : (
                proposedWorkshops.map((w) => (
                  <tr key={w.id}>
                    <td><Link to={`/workshop/${w.id}`}>{w.workshop_type}</Link></td>
                    <td>{w.date}</td>
                    <td><span className="badge badge--warning">{w.get_status}</span></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}