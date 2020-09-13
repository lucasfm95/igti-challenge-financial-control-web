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
                <button className="btn waves-effect waves-light" onClick={() => { alert("edit") }}>
                    <i className="Tiny material-icons">edit</i>
                </button>
                <button className="btn waves-effect waves-light red" style={{ marginLeft: "5px" }} onClick={() => { alert("delete") }}>
                    <i className="Tiny material-icons">delete</i>
                </button>
            </div>
        </div>
    )
}
