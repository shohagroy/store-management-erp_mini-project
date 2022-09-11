

// all items display section 
// tiles category 
let tilesObject = JSON.parse(localStorage.getItem('Tiles'))

// ceramic category 
let ceramicObject = JSON.parse(localStorage.getItem('Ceramic'))

// bathroom category 
let bathroomObject = JSON.parse(localStorage.getItem('Bathroom'))

// other category 
let otherObject = JSON.parse(localStorage.getItem('Other'))

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
})
