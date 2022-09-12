


// get input valu use id 
const getValueUseId = (id)=>{
    const innerTextFild = document.getElementById(id);
    const innerTextContain = innerTextFild.value;
    innerTextFild.value = "";
    return innerTextContain;
}


// get inner text  use id 
const getInnerTextUseId = (id)=>{
    const innerTextFild = document.getElementById(id);
    const innerTextContain = innerTextFild.innerText;
    return innerTextContain;
}


// items update function display 
const itemUpdateDisplay = (displayObject)=>{
    document.getElementById('code-fild').value = displayObject[0].code;
    document.getElementById('name-fild').value = displayObject[0].name;
    document.getElementById('descrip').value = displayObject[0].description;
    document.getElementById('category-option').value = displayObject[0].category;
    document.getElementById('text-type').value = displayObject[0].textType;
    document.getElementById('item-type').value = displayObject[0].itemType;
    document.getElementById('unit-file').value = displayObject[0].unit;
}




const getIdAndSetInnertext = (id, setItem)=>{
    const getId = document.getElementById(id);

    console.log(getId)
    getId.innerText = setItem
 
 }
 
 const viewInvoice = (invoiceNumber)=>{
 const allInvoice = JSON.parse(localStorage.getItem('invoice'));
 const targetInvoice = allInvoice[invoiceNumber];
 console.log(targetInvoice[0])
 
 getIdAndSetInnertext('invoice', targetInvoice[0].invoice)
 getIdAndSetInnertext('custoner-name', targetInvoice[0].name)
 getIdAndSetInnertext('date', targetInvoice[0].date)
 
 getIdAndSetInnertext('subtotal-fild', targetInvoice[0].sub)
 getIdAndSetInnertext('shipping-fild', targetInvoice[0].shipping)
 getIdAndSetInnertext('shipping-fild', targetInvoice[0].shipping)
 getIdAndSetInnertext('discount-fild', targetInvoice[0].discount)
 getIdAndSetInnertext('total-fild', targetInvoice[0].total)
 
 


//  prient invoice function 
 const invoiceItem = targetInvoice[1]
 console.log(invoiceItem)
 
 const itemsTable = document.getElementById('items-table')
 
 let SlNumber = 1
 invoiceItem.forEach(element => {
     const newItem = document.createElement('tr');
     newItem.innerHTML = `
         <td>${SlNumber++}</td>
         <td>${element[1]}</td>
         <td>${element[2]}</td>
         <td>${element[3]}</td>
         <td>${element[4]}</td>
         <td>${element[5]}</td>
     `
     itemsTable.appendChild(newItem)
     
 });
 
 }
 
 
 viewInvoice('1/2022')