import React, { Component, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState('En');
  const { i18n } = useTranslation();


  const switchLanguage = (lang) =>{
      i18n.changeLanguage(lang);
      setCurrentLang(lang.charAt(0).toUpperCase() + lang.slice(1));
  }

 function showMenuFun(event){
    event.preventDefault();
    
    setShowMenu(true)
    document.addEventListener('click', closeMenuFun);;
  }
  
  function closeMenuFun(event){
      setShowMenu(false)
      document.removeEventListener('click', closeMenuFun);
  }


  
    return (
      <div className = "dropdown-block">
        <div className={`dropdown-button${showMenu ? ' active' : ''}`} onClick={showMenuFun}>
          {currentLang} <span className="dropdown-arrow"></span>
        </div>
        
        {
          showMenu
            ? (
              <div className="dropdown-list">
                <div className="dropdown-item" onClick={()=>switchLanguage('en')}> En </div>
                <div className="dropdown-item" onClick={()=>switchLanguage('ru')}> Ru </div>
                <div className="dropdown-item" onClick={()=>switchLanguage('ua')}> Ua </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
}

export default Dropdown;