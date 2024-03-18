import React, { useState } from 'react';

function Poll({ poll, onVote }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      alert('Please select an option.');
      return;
    }
    onVote(selectedOption);
  };

  return (
    <div>
      <h2>{poll.question}</h2>
      <form onSubmit={handleSubmit}>
        {poll.options.map((option) => (
          <div key={option.text}>
            <input
              type="radio"
              id={option.text}
              name="poll"
              value={option.text}
              onChange={(e) => setSelectedOption(e.target.value)}
              checked={selectedOption === option.text}
            />
            <label htmlFor={option.text}>{option.text}</label>
          </div>
        ))}
        <button type="submit">Vote</button>
      </form>
    </div>
  );
}

export default Poll;
