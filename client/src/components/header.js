import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {userContext} from '../context/userContext'



const Header = () => {
        const {user,isAuth,isLoading,logout} = useContext(userContext);

        return (
            <div className="header-section">
                <div className="container flex-wrap">
                    <NavLink exact className="header-logo" to="/">Template</NavLink>
                    <ul className="header-nav">
                        {(isLoading === false) && 
                            (!isAuth) 
                            ? (
                                <span>
                                    <li>
                                        <NavLink exact className="btn simple" to="/login">Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact className="btn simple" to="/register">Register</NavLink>
                                    </li>
                                </span>
                            )
                            : (
                                <span>
                                    <li>
                                        <h3 className="user-title">
                                            {(isAuth) && user.username}
                                        </h3>
                                    </li>

                                    <li>
                                        <NavLink exact className="btn simple" to="/">Home</NavLink>
                                    </li>

                                    <li>
                                        <NavLink exact className="btn simple" to="/admin">Admin</NavLink>
                                    </li>
                                    
                                    <li>
                                        <div onClick={logout} className="btn simple">Logout</div>
                                    </li>
                                </span>
                            )}
                    </ul>
                </div>
            </div>
        )
}

export default Header;