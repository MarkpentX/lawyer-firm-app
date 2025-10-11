import React from 'react';
import classes from './SchemaItem.module.css'

function SchemaItem({icon, iconTitle, number, title, description, action}) {
    return (
        <li className={classes.schemaContainer}>
            <img src={icon} alt={iconTitle}/>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={"#form"} >{action}</a>
        </li>
    );
}

export default SchemaItem;