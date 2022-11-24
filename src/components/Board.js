import React from 'react';
import Square from './Square';

export default class Field extends React.Component {


  render() {

    return (
      <div className='board-wrapper'>
        {}
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}