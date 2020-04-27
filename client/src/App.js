import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header'
import Main from './components/main'
import Login from './components/login'
import Register from './components/register'
import './App.css';

import store from './store';
import {Provider} from 'react-redux';
import {loadUser} from './actions/authActions'

class App extends React.Component {

    componentDidMount(){
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="wrapper">

                        <Header/>

                        <div className="content-section">
                            <div className="container">
                                <Route path='/' exact strict component={Main}/>
                                <Route path='/login' exact strict component={Login}/>
                                <Route path='/register' exact strict component={Register}/>
                            </div>
                        </div>

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
