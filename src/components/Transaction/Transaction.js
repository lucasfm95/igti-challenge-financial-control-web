import React from "react";
import css from "./transaction.module.css";

export default function Transaction({ day, category, description, value }) {
    return (
        <div className={css.container}>
            <div className={css.day}>
                <span>{day}</span>
            </div>
            <div className={css.description}>
                <span className={css.category}>
                    {category}
                </span>
                <span>
                    {description}
                </span>
            </div>
            <div className={css.value}>
                <span>{value}</span>
            </div>
            <div className={css.actions}>

            </div>
        </div>
    )
}
