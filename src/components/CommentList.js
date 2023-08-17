import { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://backend-tokpedplay-defxzpf2xq-et.a.run.app/comment/${id}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [id]);


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async (event) => {

    event.preventDefault();

    const newComment = {
      videoId: id,
      username: username,
      comment: commentText,
      // timestamp: new Date().toLocaleTimeString('en-US', {
      //   hour: '2-digit',
      //   minute: '2-digit',
      // }),
    };
    console.log('clicked');
    try {
      const response = await fetch(`https://backend-tokpedplay-defxzpf2xq-et.a.run.app/comment`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
      console.log('<ID:', id)

      if (response.ok) {
        setComments([...comments, newComment]);
        setUsername('');
        setCommentText('');
      } else {
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };


  return (
    <div className="right-sidebar">
      <div className="comment-list">
        <h3 style={{ marginBottom: '20px', textAlign: 'center', color: 'white' }}>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} style={{ textAlign: 'left', color: 'white' }}>
              <FontAwesomeIcon icon={faUser} className='avatar-icon' />{' '}
              <span></span>
              <strong>{comment.username}:</strong> {comment.comment}
              <small style={{ marginLeft: '4rem' }}>{comment.timestamp}</small>
            </li>
          ))}
        </ul>
      </div>
      <div className="comment-form">
        <div className='comment-form-content'>
          <form onSubmit={handleCommentSubmit}>
            <div className="form-group">
              <label htmlFor="username" style={{ color: 'white' }}>Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="commentText" style={{ color: 'white' }}>Comment:</label>
              <textarea
                id="commentText"
                value={commentText}
                onChange={handleCommentChange}
                className="form-control"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }} onClick={handleCommentSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
