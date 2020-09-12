import React from "react";
import css from "./totalizer.module.css";
import TotalizerItem from "../TotalizerItem/TotalizerItem";
import { formatMoney } from "../../helpers/format.js";

export default function Totalizer({ totalizer }) {
    const { totalItens, credit, debit, total } = totalizer;
    return (
        <div className={css.container}>
            <TotalizerItem description="Total Itens" value={totalItens} />
            <TotalizerItem description="Credit" value={formatMoney(credit)} />
            <TotalizerItem description="Debit" value={formatMoney(debit)} />
            <TotalizerItem description="Total" value={formatMoney(total)} />
        </div>
    )
}
