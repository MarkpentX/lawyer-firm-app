import React from 'react';
import classes from './DetailsItem.module.css'

function DetailsItem({title, description}) {
    return (
        <details className={classes.detailsItemContainer}>
            <summary>{title}</summary>
            <p>
                {description}
            </p>
        </details>
    );
}

export default DetailsItem;