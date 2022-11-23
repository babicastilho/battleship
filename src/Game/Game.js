import React from 'react';

const Square = (props) => <div className="square" />;

export const Game = () => {
  return (
    <div className="container">
        <div className="left">
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </div>
        
        <div className="right">
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
  );
};