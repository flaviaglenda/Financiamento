bank.config({
    formId: 'form-entradaTransacoes',
    resetInputs: true,
    automaticDate: true,
    removeButton: {
        type: "img",
        content: "./img/cancelButton.svg",
        clickEvent: sweetAlertRemoveButton
    },
    editButton: {
        type: 'img',
        content: './img/editButton.svg',
        clickEvent: sweetAlertEditButton
    }
})