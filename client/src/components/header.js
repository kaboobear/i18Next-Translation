import React, {useContext} from 'react';
import Dropdown from './dropdown'
import {NavLink} from 'react-router-dom';
import {userContext} from '../context/userContext'
import { useTranslation } from 'react-i18next';



const Header = () => {
        const {user,isAuth,isLoading,logout} = useContext(userContext);
        const { t } = useTranslation();

        return (
            <div className="header-section">
                <div className="container flex-wrap">
                    <NavLink exact className="header-logo" to="/">{t('Template.1')}</NavLink>
                    <ul className="header-nav">
                        {(isLoading === false) && 
                            (!isAuth) 
                            ? (
                                <span>
                                    <li>
                                        <NavLink exact className="btn simple" to="/login">{t('Login.1')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact className="btn simple" to="/register">{t('Register.1')}</NavLink>
                                    </li>
                                </span>
                            )
                            : (
                                <span>
                                    <li>
                                        <h3 className="user-title">
                                           <span>{t('Hello.1')}, </span> {(isAuth) && user.username}
                                        </h3>
                                    </li>

                                    <li>
                                        <NavLink exact className="btn simple" to="/">{t('Home.1')}</NavLink>
                                    </li>
                                    
                                    <li>
                                        <div onClick={logout} className="btn simple">{t('Logout.1')}</div>
                                    </li>
                                </span>
                            )}

                            <Dropdown/>
                    </ul>
                </div>
            </div>
        )
}

export default Header;