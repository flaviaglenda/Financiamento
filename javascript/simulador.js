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

