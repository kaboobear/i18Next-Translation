import React,{useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {userContext} from '../context/userContext'


const UnprivateRoute = ({component:Component, ...rest})=>{
    const {isAuth,isLoading} = useContext(userContext);

    return(
        (!isLoading) && (
        <Route exact {...rest} render={props=>{
            if(isAuth) return <Redirect to="/"/>
            return <Component/>
        }}/>)
    )
}

export default UnprivateRoute;




