import React from 'react';
import Board from '../components/Board';


export default class ArrangementPage extends React.Component {
  render() {
    return (
        <div className='arrangement'>
            <div className='wrapper' >
                <h1 className='heading' >Player {this.props.player}</h1>
                <Board />
            </div>
        </div>
    );
  }
}