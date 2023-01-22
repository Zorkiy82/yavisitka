import React from "react";
import styles from "./Comment.module.scss";
import {cn} from "../../utils/bem-css-module";

const cnStyles = cn(styles, "Comment");

const Comment = (props: {comment: string}) => {
    return (
        <li className={cnStyles()}>
            <p className={cnStyles('content')}>{props.comment}</p>
        </li>
    );
};

export default Comment;