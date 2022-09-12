
// const getIdAndSetInnertext = (id, setItem)=>{
//    const getId = document.getElementById(id);
//    getId.innerText = setItem

// }

// const viewInvoice = (invoiceNumber)=>{
// const allInvoice = JSON.parse(localStorage.getItem('invoice'));
// const targetInvoice = allInvoice[invoiceNumber];
// const invoice = targetInvoice[0].invoice;
// console.log(targetInvoice)
// getIdAndSetInnertext('invoice', invoice)
// getIdAndSetInnertext('custoner-name', targetInvoice[0].name)
// getIdAndSetInnertext('date', targetInvoice[0].date)

// getIdAndSetInnertext('subtotal-fild', targetInvoice[0].sub)
// getIdAndSetInnertext('shipping-fild', targetInvoice[0].shipping)
// getIdAndSetInnertext('shipping-fild', targetInvoice[0].shipping)
// getIdAndSetInnertext('discount-fild', targetInvoice[0].discount)
// getIdAndSetInnertext('total-fild', targetInvoice[0].total)


// const invoiceItem = targetInvoice[1]
// console.log(invoiceItem)

// const itemsTable = document.getElementById('items-table')

// let SlNumber = 1
// invoiceItem.forEach(element => {
//     const newItem = document.createElement('tr');
//     newItem.innerHTML = `
//         <td>${SlNumber++}</td>
//         <td>${element[1]}</td>
//         <td>${element[2]}</td>
//         <td>${element[3]}</td>
//         <td>${element[4]}</td>
//         <td>${element[5]}</td>
//     `
//     itemsTable.appendChild(newItem)
    
// });

// }


// viewInvoice('01/2022')