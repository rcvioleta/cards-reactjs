import React from 'react';

import Icon from './Icon/Icon';
import classes from './Icons.css';

const icons = (props) => (
    <div className={classes.Icons}>
        <Icon source="far fa-comment-dots" />
        <Icon source="far fa-heart" />
        <Icon source="fas fa-share" />
    </div>
);

export default icons;