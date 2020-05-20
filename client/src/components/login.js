import React, {useContext, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import {userContext} from '../context/userContext'
import {errorContext} from '../context/errorContext'

const Login = (props) => {
    const {isAuth, login} = useContext(userContext);
    const {errorMsg, errorId, clearErrors} = useContext(errorContext);

    const [formData,setFormData] = useState({mail: '', pass: ''});
    const [msg,setMsg] = useState({});



    useEffect(() => {
        if (isAuth === true) {
            clearErrors();
            props.history.push('/')
        }

        if (errorId === "LOGIN_FAIL") 
            setMsg(errorMsg);
        else 
            setMsg({})
    }, [isAuth, errorId, errorMsg])

    useEffect(() => {
        return () => {
            clearErrors();
        }
    }, [])



    const onChange = (e) => {
        const {value, name} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            username: formData.mail,
            password: formData.pass
        }

        login(loginData);
    }





    return (
        <div className="login-section">

            <h2 className="log-title">Login</h2>

            <div className="flex-wrap center">
                <form onSubmit={onSubmit} className="add-form" autoComplete="off">
                    <div className="simple-input">
                        <input
                            type="text"
                            name="mail"
                            placeholder="Mail"
                            value={formData.mail}
                            onChange={onChange}
                            className={msg.mail && "error"}/> {msg.mail && (
                            <div className="exclam">
                                <img src="img/exclam-ico.png" alt=""/>
                            </div>
                        )}
                    </div>

                    <div className="simple-input">
                        <input
                            type="password"
                            name="pass"
                            placeholder="Password"
                            value={formData.pass}
                            onChange={onChange}
                            className={msg.pass && "error"}/> {msg.pass && (
                            <div className="exclam">
                                <img src="img/exclam-ico.png" alt=""/>
                            </div>
                        )}
                    </div>

                    <button type="submit" className="btn">Sign In</button>

                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);