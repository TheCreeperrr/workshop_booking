import { Link } from "react-router-dom";

// Mirrors workshop_status_instructor.html:
// If no workshops: Jumbotron welcome message
// If workshops exist:
//   Section 1: "Workshops Accepted" — table: Coordinator (link) | Institute | Workshop Name | Date (+ change date icon if future) | Status
//   Section 2: "Workshops Proposed By Coordinators" — table: Coordinator (link) | Institute | Workshop Name | Date | Status | Accept button

const mockWorkshops = [
  {
    id: 1, workshop_type: "Python",
    coordinator: { id: 3, name: "Jane Doe", institute: "IIT Bombay" },
    date: "2025-08-15", status: true, tnc_accepted: true, get_status: "Accepted",
    isFuture: true,
  },
  {
    id: 2, workshop_type: "Scilab",
    coordinator: { id: 4, name: "Ravi Kumar", institute: "NIT Trichy" },
    date: "2025-09-10", status: false, tnc_accepted: true, get_status: "Pending",
    isFuture: true,
  },
];

export default function WorkshopStatusInstructor({ user }) {
  const workshops = mockWorkshops;
  const acceptedWorkshops = workshops.filter((w) => w.status);
  const proposedWorkshops = workshops.filter((w) => !w.status && w.tnc_accepted);

  if (!workshops.length) {
    return (
      <div className="page-container">
        <div className="jumbotron">
          <h1>Welcome {user?.first_name}</h1>
          <p>
            Your workshop related information will be shown here. Please navigate to{" "}
            <b>Workshop list</b> and depending upon your expertise and availability, create a
            workshop by going to <b>Create Workshop</b>.
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
                <th>Coordinator Name</th>
                <th>Institute</th>
                <th>Workshop Name</th>
                <th>Workshop Day</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {acceptedWorkshops.length === 0 ? (
                <tr><td colSpan={5}>No accepted workshops</td></tr>
              ) : (
                acceptedWorkshops.map((w) => (
                  <tr key={w.id}>
                    <td>
                      <Link to={`/profile/${w.coordinator.id}`}>{w.coordinator.name}</Link>
                    </td>
                    <td>{w.coordinator.institute}</td>
                    <td>{w.workshop_type}</td>
                    <td>
                      {w.date}
                      {/* Change date button — only for future workshops */}
                      {w.isFuture && (
                        <button className="btn btn--icon" title="Change date">
                          📅
                        </button>
                      )}
                    </td>
                    <td><span className="badge badge--success">{w.get_status}</span></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Proposed by coordinators */}
      <section className="workshop-section">
        <h3 className="section-heading section-heading--accent">Workshops Proposed By Coordinators</h3>
        <div className="table-wrapper">
          <table className="table table--striped">
            <thead>
              <tr>
                <th>Coordinator Name</th>
                <th>Institute</th>
                <th>Workshop Name</th>
                <th>Workshop Day</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {proposedWorkshops.length === 0 ? (
                <tr><td colSpan={6}>No pending proposals</td></tr>
              ) : (
                proposedWorkshops.map((w) => (
                  <tr key={w.id}>
                    <td>
                      <Link to={`/profile/${w.coordinator.id}`}>{w.coordinator.name}</Link>
                    </td>
                    <td>{w.coordinator.institute}</td>
                    <td>{w.workshop_type}</td>
                    <td>{w.date}</td>
                    <td><span className="badge badge--warning">{w.get_status}</span></td>
                    <td>
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() => {
                          if (window.confirm(
                            "Once accepted you cannot reject. You have to personally contact the Coordinator if the workshop is to be cancelled. Are you sure?"
                          )) {
                            // TODO: POST accept to Django API
                          }
                        }}
                      >
                        Accept
                      </button>
                    </td>
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