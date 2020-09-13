import React from "react";
import Transaction from "../Transaction/Transaction";
import css from "./transactions.module.css";
import { formatMoney } from "../../helpers/format.js";

export default function Transactions({ transactions, onDelete, onUpdate }) {
    return (
        <div className={css.container}>
            {transactions.map(transaction => {
                return <Transaction key={transaction.id}
                    id={transaction.id}
                    day={transaction.day}
                    category={transaction.category}
                    description={transaction.description}
                    value={formatMoney(transaction.value)}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            })}
        </div>
    )
}
