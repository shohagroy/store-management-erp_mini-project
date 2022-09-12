

const allInvoiceNumber = document.getElementById('all-invoice-report')
// all invoice display option 

const allInvoice = JSON.parse(localStorage.getItem('invoice'));


for(const invoiceNumber in allInvoice){
    const invoiceArray = allInvoice[invoiceNumber];

    const newOption = document.createElement('tr')
    newOption.innerHTML = `
    <th>${invoiceArray[0].invoice}</th>
    <th>${invoiceArray[0].name}</th>
    <th>${invoiceArray[0].date}</th>
    <th>${invoiceArray[0].total}</th>
    <th><button onclick="viewInvoice(${invoiceNumber})"><a >Prient Invoice</a></button></th>
    `
    allInvoiceNumber.appendChild(newOption)
}



document.getElementById('items-list').addEventListener('click', ()=>{
    window.open('/items-list/all-items.html','popup','width=800,height=600')
})

