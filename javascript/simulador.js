bank.finance.config({
    formId: "financeForm",
    outputIds: {
        capital: "financeOutput-capital",
        initial: "financeOutput-initial",
        rate: "financeOutput-rate",
        time: "financeOutput-time",
        rateUnit: "financeOutput-rateUnit",
        timeUnit: "financeOutput-timeUnit",
        totalValue: "financeOutput-totalValue",
        inputValue: "financeOutput-inputValue",
        difference: "financeOutput-difference",
        portion: "financeOutput-portion",
        paymentHistory: "financeOutput-paymentHistory"
    },
    zeroErrorCallback: zeroCallBack,
    resetInputs: true,
    resetTypenUnit: true,
    ignoreTimeZero: false
})

search.element('financeForm', 'id').addEventListener('submit', event => {
    let chartdiv = search.element('chartdiv', 'id');
    chartdiv.innerHTML = "";

    const chart = document.createElement('canvas');
    chart.id = "myChart";
    chartdiv.append(chart);

    let infos = bank.finance.actFinance.info.paymentHistory;
    let labels = Object.keys(bank.finance.actFinance.history.payment);
      
    new Chart(chart, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'juros',
                data: infos,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        });
})