


// get input valu use id 
const getValueUseId = (id)=>{
    const innerTextFild = document.getElementById(id);
    const InnerTextContain = innerTextFild.value;
    innerTextFild.value = "";
    return InnerTextContain;
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
