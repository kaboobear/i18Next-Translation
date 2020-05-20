import React,{useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {userContext} from '../context/userContext'


const PrivateRoute = ({component:Component,isAdmin, ...rest})=>{
    const {isAuth, user,isLoading} = useContext(userContext);

    return(
        (!isLoading) && (
        <Route exact {...rest} render={props=>{
            if(!isAuth) return <Redirect to="/login"/>
            if(!isAdmin.includes(user.isAdmin)) return <Redirect to="/"/>
            return <Component/>
        }}/>)
    )
}

export default PrivateRoute;




