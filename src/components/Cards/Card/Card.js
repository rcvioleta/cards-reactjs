import React from 'react';

import classes from './Card.css';
import Icons from '../../UI/Icons/Icons';

const card = (props) => (
    <div className={classes.Card}>
        <div>
            <div className={classes.ImageTitle}>
                {props.title}
            </div> 
            <img src={props.source} alt={props.alternative} />
        </div>
        <div className={classes.Text}>
            <p><strong>{props.title}</strong></p>
            {props.content}
            <p><strong>Website: </strong><a href={props.website}>{props.website}</a></p>
        </div>
        <Icons />
    </div>
);

export default card;