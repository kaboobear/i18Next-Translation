import React, {createContext,useState,useContext} from 'react';
import {errorContext} from './errorContext'
import axios from 'axios';

export const userContext = createContext();

const UserContextProvider = props => {
    const {getErrors}  = useContext(errorContext);

    const [user,setUsers] = useState({});
    const [isAuth,setIsAuth] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const loadUser = () =>{
        setIsLoading(true);

        axios.get('/user/info')
        .then(res => {
            setIsLoading(false);
            setIsAuth(true);
            setUsers(res.data);
        })
        .catch(err => {
            getErrors(err.response.data,err.response.status,'AUTH_ERROR');
            setIsLoading(false);
            setIsAuth(false);
            setUsers({});
        })
    }

    const login = (loginData) =>{
        const config = {headers:{'Content-type':'application/json'}}

        const body = JSON.stringify(loginData)
        axios.post('/user/login',body,config)
            .then(res => {
                setIsAuth(true);
                setIsLoading(false);
                setUsers(res.data);
            })
            .catch(err => {
                if(err.response.status === 401) getErrors({pass: "Wrong password"},err.response.status,'LOGIN_FAIL')
                else getErrors(err.response.data,err.response.status,'LOGIN_FAIL')
                setIsAuth(false);
                setIsLoading(false);
                setUsers({});
            })
    }

    const register = (regData) =>{
        const config = {headers:{'Content-type':'application/json'}}

        const body = JSON.stringify(regData)
        axios.post('/user/register',body,config)
            .then(res => {
                setIsAuth(true);
                setIsLoading(false);
                setUsers(res.data);
            })
            .catch(err => {
                getErrors(err.response.data,err.response.status,'REGISTER_FAIL')
                setIsAuth(false);
                setIsLoading(false);
                setUsers({});
            })
    }

    const logout = () => {
        axios.get('/user/logout').then(()=>{
            setIsAuth(false);
            setIsLoading(false);
            setUsers({});
        })
    }

    return (
        <userContext.Provider value={{user,isAuth,isLoading,setUsers,setIsAuth,setIsLoading,login,loadUser,register,logout}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider;