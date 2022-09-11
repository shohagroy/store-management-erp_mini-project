
// tiles category 
let tilesObject = JSON.parse(localStorage.getItem('Tiles'))
let tilesArray = [];

// ceramic category 
let ceramicObject = JSON.parse(localStorage.getItem('Ceramic'))
let ceramicArray = [];

// bathroom category 
let bathroomObject = JSON.parse(localStorage.getItem('Bathroom'))
let bathroomArray = [];

// other category 
let otherObject = JSON.parse(localStorage.getItem('Other'))
let otherArray = [];

// inesrt button get and functionlity 
document.getElementById('inesrt-button').addEventListener('click', ()=>{
    const entryCode = getValueUseId('code-fild').toUpperCase()
    const entryName = getValueUseId('name-fild')
    const entryDescrip = getValueUseId('descrip')
    const category = getValueUseId('category-option')
    const textType = getValueUseId('text-type')
    const itemType = getValueUseId('item-type')
    const unit = getValueUseId('unit-file')

    const itemDetales = {code: entryCode, name: entryName, description: entryDescrip, category: category, textType: textType, itemType: itemType, unit: unit }


    const newsObject = {}

    if(category === 'Tiles'){
        if(tilesObject === null){
            tilesArray.push(itemDetales);
            newsObject[entryCode] = tilesArray;
            localStorage.setItem(category, JSON.stringify(newsObject));
        }
        else{
            tilesArray.push(itemDetales);
            tilesObject[entryCode] = tilesArray;
            localStorage.setItem(category, JSON.stringify(tilesObject));
        }
        document.location.reload(true)
    }
    else if(category === 'Ceramic'){
        if(ceramicObject === null){
            ceramicArray.push(itemDetales);
            newsObject[entryCode] = ceramicArray;
            localStorage.setItem(category, JSON.stringify(newsObject));
        }
        else{
            ceramicArray.push(itemDetales);
            ceramicObject[entryCode] = ceramicArray;
            localStorage.setItem(category, JSON.stringify(ceramicObject));
        }
        document.location.reload(true)

    }else if(category == 'Bathroom'){
        if(bathroomObject === null){
            bathroomArray.push(itemDetales);
            newsObject[entryCode] = bathroomArray;
            localStorage.setItem(category, JSON.stringify(newsObject));
        }
        else{
            bathroomArray.push(itemDetales);
            bathroomObject[entryCode] = bathroomArray;
            localStorage.setItem(category, JSON.stringify(bathroomObject));
        }
        document.location.reload(true)

    }else{
        if(otherObject === null){
            otherArray.push(itemDetales);
            newsObject[entryCode] = otherArray;
            localStorage.setItem(category, JSON.stringify(newsObject));
        }
        else{
            otherArray.push(itemDetales);
            otherObject[entryCode] = otherArray;
            localStorage.setItem(category, JSON.stringify(otherObject));
        }
        document.location.reload(true)
    }
})



// update function 

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
    <option value="bathroom">${items.name}</option>
    `
    itemSelectOption.appendChild(newOption)
})

itemSelectOption.addEventListener('change', ()=>{
    searchItemFild.value = itemSelectOption.value
    const displayUpdateitem = tilesObject[itemSelectOption.value]
    itemUpdateDisplay(displayUpdateitem);

    document.getElementById('inesrt-button').innerText = "Update Items";
})


document.getElementById('items-list').addEventListener('click', ()=>{
    window.open('reports/all-items.html','popup','width=800,height=600')
})

