import React from 'react';
import './UpIcon.scss';

import Up from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const UpIcon = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
    return (
        <div className = "up">
        <Fab color="secondary" aria-label="edit" className = "Fab">
            <Up className = "up-icon"/>
        </Fab>
        </div>
    );
};

export default UpIcon;