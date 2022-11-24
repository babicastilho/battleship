import React from 'react';

export default class WelcomePage extends React.Component {
    render() {
        return (
            <div className='welcome' >
                <div className='start-page'>
                    <h1 className='heading' >{this.props.heading} <span>{this.props.image}</span></h1>
                    <p className='description' >{this.props.description}</p>
                    
                </div>
            </div>
        );
    }
}