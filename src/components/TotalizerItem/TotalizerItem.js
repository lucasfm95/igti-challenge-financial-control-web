import React from "react";
import css from "./totalizerItem.module.css";

export default function TotalizeItem({ description, value }) {
    return (
        <div>
            <span className={css.descripton}>{description}:</span>
            <span>{value}</span>
        </div>
    )
}
