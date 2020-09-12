import React, { useState } from "react";

export default function FilterTransaction({ onChange }) {

    const [value, setValue] = useState("");

    function handleOnChange(event) {
        setValue(event.target.value);
        onChange(event.target.value);
    }

    return (
        <div>
            <input type="text" value={value} placeholder="Search" onChange={handleOnChange} />
        </div>
    )
}
