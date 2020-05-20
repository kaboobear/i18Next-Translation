import React, {useContext, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import {userContext} from '../context/userContext'
import {errorContext} from '../context/errorContext'

const Register = (props) => {
        const {isAuth, register} = useContext(userContext);
        const {errorMsg, errorId, clearErrors} = useContext(errorContext);
    
        const [formData,setFormData] = useState({login: '', mail: '', pass: '', pass2: ''});
        const [msg,setMsg] = useState({});
    
    

        useEffect(() => {
            if (isAuth) {
                clearErrors();
                props.history.push('/')
            }
    
            if (errorId === "REGISTER_FAIL") 
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
    
            const regData = {
                login: formData.login,
                mail: formData.mail,
                pass: formData.pass,
                pass2: formData.pass2
            }
    
            register(regData);
        }
    

        return (
            <div className="register-section">

                <h2 className="log-title">Register</h2>

                <div className="flex-wrap center">
                    <form onSubmit={onSubmit} className="add-form" autoComplete="off">
                        <div className="simple-input">
                            <input
                                type="text"
                                name="login"
                                placeholder="Login"
                                value={formData.login}
                                onChange={onChange}
                                className={msg.login && "error"}/> {msg.login && (
                                <div className="exclam">
                                    <img src="img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <div className="simple-input">
                            <input
                                type="text"
                                name="mail"
                                placeholder="E-mail"
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

                        <div className="simple-input">
                            <input
                                type="password"
                                name="pass2"
                                placeholder="Password Again"
                                value={formData.pass2}
                                onChange={onChange}
                                className={msg.pass2 && "error"}/> {msg.pass2 && (
                                <div className="exclam">
                                    <img src="img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <button type="submit" className="btn">Sign Up</button>
                    </form>
                </div>
            </div>
        );
}

export default withRouter(Register)
