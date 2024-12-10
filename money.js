const exchange_rates = {
    'USD': 2768,
    'YEN': 7527,
    'PS': 39170,
    'CAD': 6762,
    'INR': 4135,
}

function tom() {
    let from = document.getElementById('sel1').value;
    let amount = document.getElementById('oamount').value;
    let sally = amount*exchange_rates[from]
    document.getElementById('converted_Amount').value = sally
}