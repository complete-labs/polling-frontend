import React from 'react';

function PollList({ polls, onSelectPoll }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>Active Polls</h2>
        {polls.map((poll) => (
          <div key={poll.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3 onClick={() => onSelectPoll(poll.id)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
              {poll.question}
            </h3>
            <form>
              {poll.options.map((option, index) => (
                <div key={index} style={{ marginTop: '10px' }}>
                  <input
                    type="radio"
                    id={`${poll.id}-${index}`}
                    name={`poll-${poll.id}`}
                    value={option}
                    // This is just for display; it doesn't change state or submit
                    onChange={() => {}}
                  />
                  <label htmlFor={`${poll.id}-${index}`} style={{ marginLeft: '5px' }}>{option}</label>
                </div>
              ))}
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PollList;
