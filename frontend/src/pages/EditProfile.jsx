// Mirrors edit_profile.html:
// Centered table form with all profile fields
// "Save Profile" button bottom right

export default function EditProfile() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST to Django edit_profile endpoint
  };

  const fields = [
    { name: "title", label: "Title", type: "text" },
    { name: "first_name", label: "First Name", type: "text" },
    { name: "last_name", label: "Last Name", type: "text" },
    { name: "phone_number", label: "Phone Number", type: "tel" },
    { name: "institute", label: "Institute", type: "text" },
    { name: "department", label: "Department", type: "text" },
    { name: "position", label: "Position", type: "text" },
    { name: "location", label: "Location", type: "text" },
    { name: "state", label: "State", type: "text" },
  ];

  return (
    <div className="page-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="table-wrapper">
          <table className="table table--bordered">
            <tbody>
              {fields.map((field) => (
                <tr key={field.name}>
                  <th><label htmlFor={field.name}>{field.label}</label></th>
                  <td>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      className="form-input"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn--primary">Save Profile</button>
        </div>
      </form>
    </div>
  );
}