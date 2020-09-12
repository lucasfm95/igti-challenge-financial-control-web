const formatter = new Intl.NumberFormat([], {
    style: "currency",
    currency: "BRL"
});

function formatMoney(value) {
    return formatter.format(value);
}

export { formatMoney };