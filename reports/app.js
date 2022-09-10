

// tiles category 
let tilesObject = JSON.parse(localStorage.getItem('tiles'))

// ceramic category 
let ceramicObject = JSON.parse(localStorage.getItem('ceramic'))

// bathroom category 
let bathroomObject = JSON.parse(localStorage.getItem('bathroom'))

// other category 
let otherObject = JSON.parse(localStorage.getItem('other'))

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

console.log(newArrayItems)
const displayContainer = document.getElementById('all-items-report')
newArrayItems.forEach(items =>{
    const newOption = document.createElement('tr')
    newOption.innerHTML = `
        <td>${items.code}</td>
        <td>${items.name}</td>
        <td>${items.unit}</td>
        <td>${items.category}</td>
    `
    displayContainer.appendChild(newOption)

    console.log(items)
})