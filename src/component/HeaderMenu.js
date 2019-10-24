import React from 'react';
import './HeaderMenu.scss';
const HeaderMenu = () => {
    return (
        <div className = "header">
        <div className = "inner">
            <ul>
                <li><span></span></li>
                <li>Introduce</li>
                <li>Study</li>
                <li>Daily life</li>
                <li>Anything</li>
            </ul>
            <div className = "search">
                <input type = "text" placeholder = "검색하기"/>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/search.png"></img>
            </div>
        </div>
        </div>
    );
};

export default HeaderMenu;