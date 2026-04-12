import { useState } from "react";

// Mirrors edit_workshop_type.html:
// "View / Edit Workshop Type" heading
// Same fields as Add: Name, Duration, Description, Terms & Conditions
// Attachments section below: list of file inputs with Delete buttons
// "Add another attachment" link
// "Save" button bottom right

export default function EditWorkshopType() {
  const [form, setForm] = useState({
    name: "Python",
    duration: "2",
    description: "An introductory Python workshop.",
    terms_and_conditions: "Participants must bring laptops.",
  });

  const [attachments, setAttachments] = useState([
    { id: 1, file: null, existingName: "schedule.pdf" },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddAttachment = () => {
    setAttachments([...attachments, { id: Date.now(), file: null, existingName: "" }]);
  };

  const handleDeleteAttachment = (id) => {
    setAttachments(attachments.filter((a) => a.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: PATCH to Django API
  };

  return (
    <div className="page-container">
      <h2 className="page-heading">View / Edit Workshop Type</h2>

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

        {/* Attachments section */}
        <h2 className="section-heading">Attachments</h2>

        {attachments.map((attachment) => (
          <div key={attachment.id} className="attachment-row">
            <div className="attachment-fields">
              {attachment.existingName && (
                <span className="attachment-name">{attachment.existingName}</span>
              )}
              <input type="file" className="form-input" />
            </div>
            {attachment.existingName && (
              <button
                type="button"
                className="btn btn--danger"
                onClick={() => handleDeleteAttachment(attachment.id)}
              >
                Delete
              </button>
            )}
            <hr className="divider" />
          </div>
        ))}

        <button type="button" className="btn btn--secondary" onClick={handleAddAttachment}>
          Add another attachment
        </button>

        <div className="form-actions">
          <button type="submit" className="btn btn--primary">Save</button>
        </div>
      </form>
    </div>
  );
}