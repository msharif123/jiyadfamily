import React, { useState } from 'react';
import "./Comment.css";

const Comment = ({ onCommentSubmit, comments }) => {
  const [formData, setFormData] = useState({ name: '', city: '', comment: '' });

  // Handles input change for name, city, and comment fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment && formData.city) {
      onCommentSubmit(formData); // Pass the form data to the parent component
      setFormData({ name: '', city: '', comment: '' }); // Reset the form
    }
  };

  return (
    <section className="section comments">
      <h2>Leave Your Comments</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <textarea
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="primary-btn">Submit Comment</button>
      </form>

      <div className="comments-list">
        {comments.map((comment, i) => (
          <div key={i} className="comment">
            <h4>{comment.name} <small>({comment.city})</small></h4>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comment;
