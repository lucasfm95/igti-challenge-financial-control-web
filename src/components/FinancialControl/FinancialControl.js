import React, { useState, useEffect } from "react";
import axios from "axios";
import Transactions from "../Transactions/Transactions";
import css from "./financialControl.module.css";


export default function FinancialControl() {

    var transactions = [];
    const [filteredTransactions, setFilteredTransactions] = useState([]);


    useEffect(() => {
        const getTransactions = async () => {
            const date = new Date();
            transactions = await getTransactionsByYearMonth(`${date.getFullYear()}-${date.getMonth()}`);

            transactions = transactions.sort((a, b) => a.day - b.day);

            setFilteredTransactions(transactions);
        }

        getTransactions();
    }, []);


    async function getTransactionsByYearMonth(yearMonth) {
        const result = await axios.get(`http://localhost:4000/transactions/?monthYear=2020-08`);
        return result.data;
    }


    return (
        <div className={css.container}>
            <h1>Financial Control</h1>
            <Transactions transactions={filteredTransactions} />
        </div>
    )
}
