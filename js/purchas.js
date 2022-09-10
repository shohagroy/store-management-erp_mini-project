
document.getElementById('add-button').addEventListener('click', ()=>{
    console.log('add button click')


    const itemCode = getInputValue('item-code');
    const itemName = getInputValue('item-name');
    const itemquantity = getInputValue('item-quantity');

console.log(itemCode)
})




const getInputValue = (id)=>{
    const inputString = document.getElementById(id);
    const inputValue = inputString.value;
    return inputValue
}