
// tiles category 
let tilesObject = JSON.parse(localStorage.getItem('Smart Phone'))
// ceramic category 
let ceramicObject = JSON.parse(localStorage.getItem('Lobtop'))
// bathroom category 
let bathroomObject = JSON.parse(localStorage.getItem('Watch'))
// other category 
let otherObject = JSON.parse(localStorage.getItem('Other'))

let allInvoice = JSON.parse(localStorage.getItem('invoice'));

const invoiceNumber = document.getElementById('invoice-number')


if(allInvoice === null){
    invoiceNumber.innerText = 1
}
else{
    let newInvoiceNumber = Object.keys(allInvoice).length
    let newGenatareNumber = newInvoiceNumber + 1;
    invoiceNumber.innerText = newGenatareNumber
}

const invoiceDate = document.getElementById('invoice-date');
const today = new Date()

const dateAndTime = today.toLocaleTimeString() + "  " + today.toLocaleDateString();

invoiceDate.innerText = dateAndTime

let totalAmmount = []
let allContant = []

document.getElementById('add-button').addEventListener('click', ()=>{

    const contant = []
    const itemCode = getValueUseId('search-item-fild');
    const itemName = getValueUseId('select-tems-container');
    const itemquantity = parseFloat(getValueUseId('item-quantity'));
    const itemUnit = getValueUseId('unit-file');
    const itemPrice = getValueUseId('price');
    let total = getValueUseId('toal');
    total = itemquantity * itemPrice;

    totalAmmount.push(total)
    contant.push(itemCode,itemName, itemquantity, itemUnit, itemPrice, total)
    
    allContant.push(contant)
    
    let subtotatFild = document.getElementById('sub-total');
    let subtotal = totalAmmount.reduce((x, y)=> x + y)

    let mainTotal = document.getElementById('total-ammount');
    mainTotal.innerText = subtotal

    subtotatFild.innerText = subtotal

    const purchasedContainer = document.getElementById('purchasing-item-container');

    const newPurchage = document.createElement('tr');
    newPurchage.innerHTML = `
        <th class="purchased-contain">${itemCode}</th>
        <th class="purchased-contain">${itemName}</th>
        <th class="purchased-contain">${itemquantity}</th>
        <th class="purchased-contain">${itemUnit}</th>
        <th class="purchased-contain">${itemPrice}</th>
        <th class="purchased-contain totalPrice">${total}</th>
    `
    purchasedContainer.appendChild(newPurchage)
})

document.getElementById('update-button').addEventListener('click', ()=>{

    let subtotatFild = document.getElementById('sub-total');
    let shippingChange = document.getElementById('sipping-charge');
    let discount = document.getElementById('discount');
    let totalAmmount = document.getElementById('total-ammount');

    let subtotalString = subtotatFild.innerText
    let subTotalNumber = parseFloat(subtotalString)

    const shippingChangeValue = shippingChange.value;
    const shippingChangeNumber = parseFloat(shippingChangeValue);

    const discountValu = discount.value;
    const discountNumer = parseFloat(discountValu);

    totalAmmount.innerText = subTotalNumber + shippingChangeNumber - discountNumer;
})

const newArrayItems = [];

const getAllProductInOneArray = (productObject)=>{
    for(const items in productObject){
        newArrayItems.push(productObject[items][0])
    }
}

getAllProductInOneArray(tilesObject)
getAllProductInOneArray(ceramicObject)
getAllProductInOneArray(bathroomObject)
getAllProductInOneArray(otherObject)

const itemSelectOption = document.getElementById('select-tems-container');
const searchItemFild = document.getElementById('search-item-fild');
newArrayItems.forEach(items =>{
    const newOption = document.createElement('option')
    newOption.setAttribute('value', items.code)
    newOption.innerHTML = `
    <option class="purchage-total">${items.name}</option>
    `
    itemSelectOption.appendChild(newOption)
    
    itemSelectOption.addEventListener('change', ()=>{
    document.getElementById('unit-file').value = items.unit;

})

})


itemSelectOption.addEventListener('change', ()=>{
    searchItemFild.value = itemSelectOption.value

})


document.getElementById('invoice-button').addEventListener('click', ()=>{

const genarateInvoice = {}
const newArray = []

    const genarateInvoiceNUmber = document.getElementById('make-invoice-number').innerText;
    const getDate = document.getElementById('invoice-date').innerText;
    const customerName = document.getElementById('customer-name-fild').value;

    const subtotatFild = document.getElementById('sub-total').innerText;
    const shippingChange = document.getElementById('sipping-charge').value;
    const discount = document.getElementById('discount').value;
    const totalAmmount = document.getElementById('total-ammount').innerText;

    const totalAmountElement = {invoice: genarateInvoiceNUmber, date: getDate, name:customerName, sub: subtotatFild, shipping: shippingChange, discount: discount, total: totalAmmount }

    if(allInvoice === null){
        newArray.push(totalAmountElement)
        newArray.push(allContant)
        genarateInvoice[genarateInvoiceNUmber] = newArray;
        localStorage.setItem("invoice", JSON.stringify(genarateInvoice))
    }
    else{
        newArray.push(totalAmountElement)
        newArray.push(allContant)
        allInvoice[genarateInvoiceNUmber] = newArray
        localStorage.setItem("invoice", JSON.stringify(allInvoice))
    }
    
    window.open('/invoice-prient/invoice.html','popup','width=800,height=600')
    document.location.reload(true)
})

document.getElementById('items-list').addEventListener('click', ()=>{
    window.open('/items-list/all-items.html','popup','width=800,height=600')
})

