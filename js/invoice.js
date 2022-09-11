

const allInvoiceNumber = document.getElementById('all-invoice-report')
console.log(allInvoiceNumber)

// all invoice display option 

const allInvoice = JSON.parse(localStorage.getItem('invoice'));


for(const invoiceNumber in allInvoice){
    const invoiceArray = allInvoice[invoiceNumber];
    console.log(invoiceArray[0])

    const newOption = document.createElement('tr')
    newOption.innerHTML = `
    <th>${invoiceArray[0].invoice}</th>
    <th>${invoiceArray[0].name}</th>
    <th>${invoiceArray[0].date}</th>
    <th>${invoiceArray[0].total}</th>
    <th><button>Prient Invoice</button></th>
    `
    allInvoiceNumber.appendChild(newOption)

}


