import React from 'react';
import './Footer.scss';
import githubicon from '../image/github.png';

import Tooltip from '@material-ui/core/Tooltip';

const Footer = () => {
    return (
        <div className = "FooterWrapper">
        <a href = "https://github.com/yonichaninini/chanmiBlog">
        <Tooltip title = "github repository">
            <img src = {githubicon} className = "git-icon"/>
        </Tooltip>
        </a>
        <div className = "email">
        email : cksal0805@estsecurity.com
        </div>
        </div>
    );
};

export default Footer;