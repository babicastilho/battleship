/*
PAGE STATS

0:
1: WelcomePage
2: arrangementPage
3:

*/

import React from 'react';
import Button from './components/Button';
import WelcomePage from './pages/WelcomePage';
import ArrangementPage from './pages/ArrangementPage';
import GamePage from './pages/GamePage';


export default class App extends React.Component {
    state = {pageSwitch: 1,}

    togglePage = () => {
        this.setState(prevState => {
            if (prevState.pageSwitch === -3) 
                return { pageSwitch: 1 };
            
            else 
                return { pageSwitch: prevState.pageSwitch - 1 };
            
        }); 
    }

    render() {
        return (
            <main>
                <div className='wrapper'>
                {
                    this.state.pageSwitch === 1 ?
                        <WelcomePage
                        heading='Simplified naval combat'
                        description='A first hometask React game'
                        image='⚓️'
                        /> :
                    this.state.pageSwitch === 0 ?
                    <ArrangementPage player='1' /> :
                    this.state.pageSwitch === -1 ?
                        <ArrangementPage player='2' /> :
                        this.state.pageSwitch === -2 ?
                        <WelcomePage
                            heading='All ships are in formation.'
                            description='If you are ready just click "start" button'
                        /> :
                        <GamePage />
                }

                {
                true &&
                    <Button
                        handleClick={this.togglePage}
                        txt={
                        this.state.pageSwitch === 1 ?
                            'Start' :
                            this.state.pageSwitch === 0 ?
                            'Done' :
                            this.state.pageSwitch === -1 ?
                                'Done' :
                                this.state.pageSwitch === -2 ?
                                'Start' :
                                'Restart'
                        }
                    />
                }
            </div>
        </main>
        );
    }
}
