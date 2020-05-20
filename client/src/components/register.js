import React, {useContext, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import {userContext} from '../context/userContext'
import {errorContext} from '../context/errorContext'
import { useTranslation } from 'react-i18next';

const Register = (props) => {
        const { t } = useTranslation();
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

                <h2 className="log-title">{t("Register.1")}</h2>

                <div className="flex-wrap center">
                    <form onSubmit={onSubmit} className="add-form" autoComplete="off">
                        <div className="simple-input">
                            <input
                                type="text"
                                name="login"
                                placeholder={t("Form-login.1")}
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
                                placeholder={t('Form-mail.1')}
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
                                placeholder={t('Form-pass.1')}
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
                                placeholder={t('Form-pass2.1')}
                                value={formData.pass2}
                                onChange={onChange}
                                className={msg.pass2 && "error"}/> {msg.pass2 && (
                                <div className="exclam">
                                    <img src="img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <button type="submit" className="btn">{t('Register.1')}</button>
                    </form>
                </div>
            </div>
        );
}

export default withRouter(Register)
