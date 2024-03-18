import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PollList from './PollList';
import Poll from './Poll';
import PollResults from './PollResults';
import WelcomePage from './WelcomePage';

function App() {
  const [polls, setPolls] = useState([
    { id: 1, question: "What's your favorite programming language?", options: ['JavaScript', 'Python', 'Ruby', 'Go'], isActive: true },
    { id: 2, question: "What's your favorite color?", options: ['Red', 'Blue', 'Green', 'Yellow'], isActive: false }, // This poll is not active
    { id: 3, question: "What's your favorite food?", options: ['Pizza', 'Sushi', 'Burgers', 'Pasta'], isActive: true },
    { id: 4, question: "Which pet do you prefer?", options: ['Dog', 'Cat', 'Bird', 'Fish'], isActive: true },
    // Add more polls as needed
  ]);
  const [currentPollId, setCurrentPollId] = useState(null);
  const [viewResults, setViewResults] = useState(false);

  const handleSelectPoll = (pollId) => {
    setCurrentPollId(pollId);
    setViewResults(false);
  };

  const handleVote = (option) => {
    alert(`You voted for ${option}`);
    // Here you would typically send the vote to the backend and then fetch updated poll data
    setViewResults(true);
  };

  const currentPoll = polls.find(poll => poll.id === currentPollId);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/polls" element={
            <>
              <PollList polls={polls.filter(poll => poll.isActive)} onSelectPoll={handleSelectPoll} />
              {currentPoll && !viewResults && <Poll poll={currentPoll} onVote={handleVote} />}
              {currentPoll && viewResults && <PollResults poll={currentPoll} />}
            </>
          } />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
