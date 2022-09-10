

// tiles category 
let tilesObject = JSON.parse(localStorage.getItem('tiles'))

// ceramic category 
let ceramicObject = JSON.parse(localStorage.getItem('ceramic'))

// bathroom category 
let bathroomObject = JSON.parse(localStorage.getItem('bathroom'))

// other category 
let otherObject = JSON.parse(localStorage.getItem('other'))



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
    
    console.log(allContant)
    
    let subtotatFild = document.getElementById('sub-total');

    let subtotal = totalAmmount.reduce((x, y)=> x + y)

    subtotatFild.innerText = subtotal
    console.log(subtotal)
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
    newOption.setAttribute('value', items.name)
    newOption.innerHTML = `
    <option class="purchage-total">${items.name}</option>
    `
    itemSelectOption.appendChild(newOption)
    itemSelectOption.addEventListener('change', ()=>{
    searchItemFild.value = items.code
    document.getElementById('unit-file').value = items.unit;
})
})

document.getElementById('invoice-button').addEventListener('click', ()=>{
    console.log('invoice button click')

    // const itemCode = getInnerTextUseId('search-item-fild');
    // const itemName = getInnerTextUseId('select-tems-container');
    // const itemquantity = getInnerTextUseId('item-quantity');
    // const itemUnit = getInnerTextUseId('unit-file');
    // const itemPrice = getInnerTextUseId('price');
    // const total = getInnerTextUseId('toal');

    // console.log(itemCode)


    // const newContaint = [];

    // const purchageContain = document.querySelectorAll('.purchased-contain');
    // console.log(purchageContain)

    // purchageContain.forEach(contain =>{
    //     newContaint.push(contain.innerText)
    //     console.log(contain.innerText)
    // })

    // console.log(newContaint)
})



document.getElementById('items-list').addEventListener('click', ()=>{
    window.open('reports/all-items.html','popup','width=800,height=600')
})



