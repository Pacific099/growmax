const form = document.getElementById('order-form');

const rowSet = new Set();

function addList() {
    const productItem = document.getElementById('productList').value;
    if (!rowSet.has(productItem)) {
        rowSet.add(productItem);
        const row = document.createElement('DIV');
        row.setAttribute("class", "row col-lg-3 col-md-3 col-sm-3");
        const rowItem = document.createElement('INPUT');
        rowItem.setAttribute("class", "row-items");
        rowItem.setAttribute("type", "text");
        rowItem.setAttribute("name", "productItem");
        rowItem.setAttribute("value", productItem);
        rowItem.readOnly = true; 
        rowItem.innerHTML = productItem;
        const quantity = document.createElement('INPUT');
        quantity.setAttribute("class", "row-quantity");
        quantity.setAttribute("type", "text");
        quantity.setAttribute("name", "quantity");
        quantity.setAttribute("placeholder", "Quantity");
        row.appendChild(rowItem);
        row.appendChild(quantity);
        form.appendChild(row);
    }
}

function showList() {
    const rowItems = document.getElementsByClassName('row-items');
    const rowQuantity = document.getElementsByClassName('row-quantity');
    for (index = 0; index < rowItems.length; index++) {
        console.log(`Item name : ${rowItems[index].innerHTML} and its quantity : ${rowQuantity[index].value}`);
    }
}


function validateFields() {
    
}