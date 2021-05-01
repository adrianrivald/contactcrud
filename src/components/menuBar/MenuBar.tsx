import React from 'react';
import './MenuBar.scss'
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../searchBar/SearchBar';


interface MenuBarProps {
    isToggleMenu?: boolean;
    toggleMenu?: () => void;
}
const Menubar = (Props: MenuBarProps) => {
    const { isToggleMenu, toggleMenu } = Props;
    const history = useHistory();

    return (
        <div className="menu-bar" >
            <div className="menu-header">
                <div className="logo">
                    <img src="https://icon-library.com/images/contact-book-icon/contact-book-icon-9.jpg"/>
                </div>
                {/* <div className="toggle" onClick={toggleMenu}>
                    X
                </div> */}
            </div>
            <div className="menu-item" onClick={() => (history.push('/'))}>
                <FontAwesomeIcon icon={faUser}/>
                <span className="text">Home</span>
                <div className="line" />
            </div>
            <div className="menu-item" onClick={() => (history.push('/add'))}>
                <FontAwesomeIcon icon={faPlus}/>
                <span className="text">Add Contact</span>
                <div className="line" />
            </div>
            <div className="menu-item">
                <FontAwesomeIcon icon={faInfo}/>
                <span className="text">About</span>
                <div className="line" />
            </div>
        </div>
    )
}

export default Menubar