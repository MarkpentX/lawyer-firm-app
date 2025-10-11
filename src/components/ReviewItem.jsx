import quoteIcon from "../../public/imgs/quote.svg";
import classes from "./ReviewItem.module.css"

function ReviewItem({title, name, jobTitle, result }) {
    return (
        <li className={classes.revItemContainer}>
            <img src={quoteIcon} alt="quote-icon"/>
            <p>{title}</p>
            <strong>{name}</strong>
            <em>{jobTitle}</em>
            <p>{result}</p>
        </li>
    );
}

export default ReviewItem;