import React, { useState } from 'react';

function VotePage() {
  const [voteCount, setVoteCount] = useState(0);
  const [userVote, setUserVote] = useState(null); // null, 'like', or 'dislike'

    // CSS styles
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial, sans-serif'
    },
    heading: {
      color: '#228B22',
      marginBottom: '30px'
    },
    question: {
      fontSize: '20px',
      marginBottom: '25px',
      color: '#333'
    },
    button: {
      padding: '12px 20px',
      margin: '10px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    likeBtn: {
      background: userVote === 'like' ? '#16a34a' : '#22c55e',
      color: '#fff',
      opacity: userVote === 'like' ? 0.7 : 1,
      cursor: userVote === null ? 'pointer' : 'not-allowed'
    },
    dislikeBtn: {
      background: userVote === 'dislike' ? '#b91c1c' : '#ef4444',
      color: '#fff',
      opacity: userVote === 'dislike' ? 0.7 : 1,
      cursor: userVote === null ? 'pointer' : 'not-allowed'
    },
    count: {
      display: 'inline-block',
      margin: '0 20px',
      fontWeight: 'bold',
      fontSize: '18px',
      verticalAlign: 'middle'
    }
  };

  // Handle like button click
  const handleLike = () => {
    if (userVote === null) {
      setVoteCount(voteCount + 1);
      setUserVote('like');
    }
  };

  // Handle dislike button click
  const handleDislike = () => {
    if (userVote === null) {
      setVoteCount(voteCount - 1);
      setUserVote('dislike');
    }
  };

  return (
    
    <div style={styles.container}>
      <h1 style={styles.heading}>Vote Page</h1>
      <div style={styles.question}>Do you like this website?</div>
      <button
        style={{ ...styles.button, ...styles.likeBtn }}
        onClick={handleLike}
        disabled={userVote !== null}
      >
        Like
      </button>
      <span style={styles.count}> {voteCount}</span>
      <button
        style={{ ...styles.button, ...styles.dislikeBtn }}
        onClick={handleDislike}
        disabled={userVote !== null}
      >
        Dislike
      </button>
    </div>
  );
}

export default VotePage;