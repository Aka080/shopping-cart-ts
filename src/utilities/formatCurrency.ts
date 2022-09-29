
export function formatCurrency (value: number){
    const formatedNumber = new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(value)

    return formatedNumber
}