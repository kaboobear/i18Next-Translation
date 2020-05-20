import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';

import Header from './components/header'
import Main from './components/main'
import Admin from './components/admin'
import Login from './components/login'
import Register from './components/register'

import PrivateRoute from './hoc/privateRoute'
import UnprivateRoute from './hoc/unprivateRoute'

import {userContext} from './context/userContext'
import {itemContext} from './context/itemContext'

const Content = (props) => {
    const {loadUser} = useContext(userContext);
    const {loadItems} = useContext(itemContext);

    useEffect(()=>{
        loadUser();
        loadItems()
    },[])

    return (
        <Router>
            <div className="wrapper">
                <Header/>

                <div className="content-section">
                    <div className="container">
                        {/* <Route path='/' exact component={Main}/>
                                <Route path='/admin' exact component={Admin}/>
                                <Route path='/login' exact component={Login}/>
                                <Route path='/register' exact component={Register}/> */}
                        <PrivateRoute path="/" isAdmin={[0,1]} component={Main}/>
                        <PrivateRoute path="/admin" isAdmin={[1]} component={Admin}/>
                        <UnprivateRoute path="/login" component={Login}/>
                        <UnprivateRoute path="/register" component={Register}/>

                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Content;
