import React from 'react';

export const WelcomeScreen = ({ startPlay }) => {
  return (
    <main>
      <button className="btn" onClick={startPlay}>Play</button>
    </main>
  );
};