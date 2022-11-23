import React from 'react';

const Square = (props) => <div className="square" />;

export const Game = () => {
  return (
    <div>
        <div>
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
        <br />
        <div>
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