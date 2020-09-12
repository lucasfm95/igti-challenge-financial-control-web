const currentYear = "2020";
const lastYear = "2019";
const nextYear = "2021";

const years = [lastYear, currentYear, nextYear];

const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
]

const selectList = [];

initSelectList();

function initSelectList() {
    for (const year of years) {
        for (const month of months) {
            selectList.push(`${year}-${month}`);
        }
    }
}

function getSelectList() {
    return selectList;
}

export { getSelectList }