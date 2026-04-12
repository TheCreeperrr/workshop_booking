import { useState } from "react";

// Mirrors add_workshop_type.html:
// "New Workshop Type" heading centered
// Row layout (stacked on mobile): Label left | Input right
// Fields: Workshop Name, Duration (with help text), Description, Terms & Conditions
// "Create" button bottom right

export default function AddWorkshopType() {
  const [form, setForm] = useState({
    name: "",
    duration: "",
    description: "",
    terms_and_conditions: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST to Django API
  };

  return (
    <div className="page-container">
      <h2 className="page-heading">New Workshop Type</h2>

      <form className="form" onSubmit={handleSubmit}>
        {/* Workshop Name */}
        <div className="form-row">
          <div className="form-label">Workshop Name :</div>
          <div className="form-field">
            <input name="name" type="text" className="form-input"
              value={form.name} onChange={handleChange} />
          </div>
        </div>

        {/* Duration */}
        <div className="form-row">
          <div className="form-label">Duration :</div>
          <div className="form-field">
            <input name="duration" type="number" className="form-input"
              value={form.duration} onChange={handleChange} />
            <small className="form-help">Enter number of days</small>
          </div>
        </div>

        {/* Description */}
        <div className="form-row">
          <div className="form-label">Description :</div>
          <div className="form-field">
            <textarea name="description" className="form-input form-textarea"
              value={form.description} onChange={handleChange} rows={4} />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="form-row">
          <div className="form-label">Terms and Conditions :</div>
          <div className="form-field">
            <textarea name="terms_and_conditions" className="form-input form-textarea"
              value={form.terms_and_conditions} onChange={handleChange} rows={4} />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn--primary">Create</button>
        </div>
      </form>
    </div>
  );
}