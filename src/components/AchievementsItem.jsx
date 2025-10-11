import React from 'react';
import classes from "./AchievementsItem.module.css"

function AchievementsItem({number, title, description}) {
    return (
        <li className={classes.achievContainer}>
            <strong>{number}</strong>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default AchievementsItem;