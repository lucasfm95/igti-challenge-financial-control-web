import React, { useState, useEffect } from "react";
import axios from "axios";
import Transactions from "../Transactions/Transactions";
import css from "./financialControl.module.css";
import Totalizer from "../Totalizer/Totalizer";
import ReferenceMonth from "../ReferenceMonth/ReferenceMonth";
import FilterTransaction from "../FilterTransaction/FilterTransaction";
import ModalDetail from "../ModalDetail/ModalDetail";

var transactions = [];
var lastSelectMonth = "2020-09";

export default function FinancialControl() {

    const refYearMonth = "2020-09";
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState({});
    const [totalizer, setTotalizer] = useState({ totalItens: 0, credit: 0, debit: 0, total: 0 });
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const getTransactions = async () => {
            transactions = await getTransactionsByYearMonth(refYearMonth);

            setFilteredTransactions(transactions);
            setTotalizerByTransactions(transactions);
        }

        getTransactions();
    }, []);

    async function getTransactionsByYearMonth(yearMonth) {
        const result = await axios.get(`http://localhost:4000/transactions/?monthYear=${yearMonth}`);
        return result.data;
    }

    async function removeTransaction(id) {
        try {
            const result = await axios.delete(`http://localhost:4000/transactions`, { headers: { id: id } });
            console.log(result)
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async function handleChangeSelect(yearMonth) {
        lastSelectMonth = yearMonth;
        const data = await getTransactionsByYearMonth(yearMonth);

        transactions = data;
        setValuesTransaction(transactions);
    }

    function setTotalizerByTransactions(transactions) {
        const totalItens = transactions.length;

        const credit = transactions.reduce((previousValue, currentValue) => {
            if (currentValue.type === "+") {
                return previousValue + currentValue.value;
            } else {
                return previousValue + 0;
            }
        }, 0);

        const debit = transactions.reduce((previousValue, currentValue) => {
            if (currentValue.type === "-") {
                return previousValue + currentValue.value;
            } else {
                return previousValue + 0;
            }
        }, 0);

        const total = credit - debit;

        setTotalizer({ totalItens: totalItens, credit: credit, debit: debit, total: total });
    }

    function setValuesTransaction(transactions) {
        setFilteredTransactions(transactions);
        setTotalizerByTransactions(transactions);
    }

    function handleChangeInput(value) {
        const filtered = transactions.filter(transactionItem => transactionItem.description.toLowerCase().includes(value.toLowerCase()));

        setValuesTransaction(filtered);
    }

    async function handleDelete(id) {
        console.log(id)
        await removeTransaction(id);
        await handleChangeSelect(lastSelectMonth);
    }

    function handleUpdate(id) {
        const data = filteredTransactions.find((Transaction) => Transaction.id === id);
        console.log("atualizar");
        console.log(data);
        console.log("================================");
        //setSelectedTransaction(data);
        //setModalOpen(true);
    }

    return (
        <div className={css.container}>
            <h1>Financial Control</h1>
            <ReferenceMonth onChange={handleChangeSelect} initSelected={refYearMonth} />
            <Totalizer totalizer={totalizer} />
            <FilterTransaction onChange={handleChangeInput} />
            <button className="waves-effect waves-light btn-small" onClick={() => { setModalOpen(true) }}>+</button>
            <Transactions transactions={filteredTransactions} onDelete={handleDelete} onUpdate={handleUpdate} />
            <ModalDetail openModal={modalOpen} closeModal={() => { setModalOpen(false) }} selectedTransaction={selectedTransaction} />
        </div>
    )
}
