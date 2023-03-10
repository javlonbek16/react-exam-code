const Price_formater = (num) => {
    return num.toLocaleString("en-US", { style: "currency", currency: "USZ" });
}

export default Price_formater