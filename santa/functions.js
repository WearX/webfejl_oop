/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tableRow.id = companion.id;
    tbody.appendChild(tableRow);

    const td_1 = createCell(tableRow)
    td_1.innerHTML = companion.getName()
    const td_2 = createCell(tableRow)
    td_2.innerHTML = companion.reszleg

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    
    button.addEventListener('click', function () {
        const companionId = parseInt(tableRow.id, 10)
        const companion = factory.getCompanionById(companionId)
        if (companion){
            refreshProductList(companion)
        }
    });
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(companion){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist')

    const option = document.createElement('option')
    option.value = companion.id;
    option.textContent = companion.getName();

    selector.appendChild(option)
}



/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){
    const companionName = document.getElementById('companion_name');
    companionName.innerHTML = companion.getName();
    companionName.style.display = 'block';

    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody');
    productTableBody.innerHTML = '';

    for (let i = 0; i < companion.products.length; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = companion.products[i];
        row.appendChild(cell);
        productTableBody.appendChild(row);
    }
}

function populateAreaSelector(factory) {
    const areaSelector = document.getElementById('carea');
    areaSelector.innerHTML = '';
    factory.reszleglista.forEach((area) => {
        const option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        areaSelector.appendChild(option);
    });
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 * @param {Factory} factory 
 */
function addCompanion(form, factory){ //TODO 
    const firstName = form.querySelector('#cfirstname').value;
    const lastName = form.querySelector('#clastname').value;
    const area = form.querySelector('#carea').value;

    const id = factory.createID()
    const companion = new Companion(id, firstName, lastName, area)
    factory.addMano(companion)
    appendToSelector(companion)
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){
    const selector = form.querySelector('#companionlist')
    const productName = form.querySelector('#productname').value
    const companionId = parseInt(selector.value, 10)

    const companion = factory.getCompanionById(companionId)
    if (companion){
        companion.addProduct(productName)
        factory.refreshProductList(companion)
    }
}


/**
 * event listener a gombhoz
 * 
 * @param {Event} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement
    const companionId = parseInt(row.id, 10)
    const companion = factory.getCompanionById(companionId)
    if (companion){
        factory.refreshProductList(companion)
    }
}