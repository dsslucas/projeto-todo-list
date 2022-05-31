export const changeDescription = (event) => ({
    type: "DESCRIPTION_CHANGED",
    //Evento do input, que pega o valor
    payload: event.target.value
})