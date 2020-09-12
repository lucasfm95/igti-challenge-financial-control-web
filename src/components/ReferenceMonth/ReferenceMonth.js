import React, { useState } from "react";
import { getSelectList } from "../../helpers/InitValuesSelect.js";

export default function ReferenceMonth({ initSelected, onChange }) {
    const [selectValue, setSelectValue] = useState(initSelected);

    function handleOnChangeSelect(event) {
        setSelectValue(event.target.value);

        onChange(event.target.value);
    }

    return (
        <div>
            <div className="input-field col s12">
                <select className="browser-default" value={selectValue} onChange={handleOnChangeSelect}>
                    {getSelectList().map(monthYer => <option key={monthYer} value={monthYer}>{monthYer}</option>)}
                </select>
            </div>
        </div>
    )
}
