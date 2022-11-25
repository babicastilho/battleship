import React from 'react';
import Board from '../components/Board';

export default class GamePage extends React.Component {
  render() {
    return (
        <div className='game' >
            <div className='wrapper'>
                <h1 className='heading'>GAME PAGE</h1>
                <div className='content'>
                    <div className='left'>
                        <h3>Player 1</h3>
                        <Board />
                    </div>
                    <div className='right'>
                        <h3>Player 2</h3>
                        <Board />
                    </div>
                </div>
            </div>
        </div>
      
    );
  }
}