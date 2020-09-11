import React from "react";
import Transaction from "../Transaction/Transaction";
import css from "./transactions.module.css";

export default function Transactions({ transactions }) {
    return (
        <div className={css.container}>
            {transactions.map(transaction => {
                return <Transaction key={transaction.id}
                    day={transaction.day}
                    category={transaction.category}
                    description={transaction.description}
                    value={transaction.value}
                />
            })}
        </div>
    )
}
