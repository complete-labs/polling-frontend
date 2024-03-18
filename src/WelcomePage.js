import React from 'react';

function WelcomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Welcome to our Polling App! 😊</h1>
      <p>Click the button below to start voting.</p>
      <button onClick={() => window.location.href='/polls'}>Go to Polls</button>
    </div>
  );
}

export default WelcomePage;
