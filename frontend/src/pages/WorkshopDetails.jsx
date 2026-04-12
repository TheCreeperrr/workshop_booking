import { useState } from "react";

// Mirrors workshop_details.html:
// Table: Workshop Type (link) | Date | Coordinator | Status badge | Instructor (if accepted)
// Comment form card below:
//   - "Post a comment" header
//   - If instructor: Public checkbox + "(Non-public comments visible only to instructors)"
//   - Textarea for comment
//   - Post button (right aligned)
// Comments list below:
//   - Each comment is a card: author link + Hidden badge (if not public) + date | comment text

const mockWorkshop = {
  id: 1,
  workshop_type: "Python",
  workshop_type_id: 1,
  date: "2025-08-15",
  coordinator: "Jane Doe",
  status: true,
  instructor: "Prof. Sharma",
  get_status: "Accepted",
};

const mockComments = [
  { id: 1, author: "Prof. Sharma", author_id: 2, public: true, created_date: "2025-07-01", comment: "Please confirm the lab availability." },
  { id: 2, author: "Jane Doe", author_id: 3, public: false, created_date: "2025-07-02", comment: "Lab is confirmed for the date." },
];

export default function WorkshopDetails({ user }) {
  const workshop = mockWorkshop;
  const comments = mockComments;

  const [commentForm, setCommentForm] = useState({ comment: "", public: true });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // TODO: POST comment to Django API
  };

  return (
    <div className="page-container">

      {/* Workshop info table */}
      <div className="table-wrapper">
        <table className="table">
          <tbody>
            <tr>
              <th>Workshop Type :</th>
              <td>
                <a href={`/workshop-types/${workshop.workshop_type_id}`}>
                  {workshop.workshop_type}
                </a>
              </td>
            </tr>
            <tr>
              <th>Date :</th>
              <td>{workshop.date}</td>
            </tr>
            <tr>
              <th>Coordinator :</th>
              <td>{workshop.coordinator}</td>
            </tr>
            <tr>
              <th>Status :</th>
              <td>
                <span className={`badge ${workshop.status ? "badge--success" : "badge--warning"}`}>
                  {workshop.get_status}
                </span>
              </td>
            </tr>
            {workshop.status && (
              <tr>
                <th>Instructor :</th>
                <td>{workshop.instructor}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Post a comment */}
      <div className="card">
        <form onSubmit={handleCommentSubmit}>
          <div className="card-header">
            <div className="card-header-row">
              <span className="card-header-title">Post a comment</span>
              {user?.isInstructor && (
                <div className="comment-visibility">
                  <input
                    type="checkbox"
                    id="public"
                    checked={commentForm.public}
                    onChange={(e) => setCommentForm({ ...commentForm, public: e.target.checked })}
                  />
                  <label htmlFor="public">Public</label>
                  <small>(Non-public comments are visible only to instructors)</small>
                </div>
              )}
            </div>
          </div>
          <div className="card-body">
            <textarea
              className="form-input form-textarea"
              rows={3}
              placeholder="Write your comment..."
              value={commentForm.comment}
              onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
            />
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn--primary">Post</button>
          </div>
        </form>
      </div>

      {/* Comments list */}
      <h2 className="section-heading">Comments</h2>

      {comments.map((comment) => (
        <div key={comment.id} className="card">
          <div className="card-header">
            <div className="card-header-row">
              <a href={`/profile/${comment.author_id}`} className="comment-author">
                {comment.author}
              </a>
              {!comment.public && (
                <span className="badge badge--dark">Hidden</span>
              )}
              <span className="comment-date">{comment.created_date}</span>
            </div>
          </div>
          <div className="card-body">
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}

    </div>
  );
}