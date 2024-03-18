import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';

function PollResults({ poll }) {
  const data = {
    labels: poll.options.map(option => option.text),
    datasets: [
      {
        data: poll.options.map(option => option.votes),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#ffce56', '#36a2eb'],
      },
    ],
  };

return (
  <div>
    <h2>{poll.question}</h2>
    <div>
      <h3>Pie Chart</h3>
      <Pie data={data} />
    </div>
    <div>
      <h3>Bar Chart</h3>
      <Bar data={data} />
    </div>
  </div>
);
}

export default PollResults;
