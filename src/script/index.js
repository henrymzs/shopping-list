const addItemButton = document.querySelector('#add_btn');
const itemList = document.querySelector('#item_list');
const inputItem = document.querySelector('.input_item');
const alertBox = document.querySelector('.alert');
const alertButton = document.querySelector('.alert_btn');

function createListItem(itemText) {
    const newItem = document.createElement('li');

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox_wrapper');

    const label = document.createElement('label');
    const checkboxImage = document.createElement('div');
    checkboxImage.classList.add('checkbox_image');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    label.appendChild(checkboxImage);
    label.appendChild(checkbox);
    checkboxWrapper.appendChild(label);

    const itemName = document.createElement('span');
    itemName.textContent = itemText;

    const deleteButton = document.createElement('img');
    deleteButton.classList.add('btn_delete');
    deleteButton.src = 'src/assets/trash-can.svg';
    newItem.appendChild(checkboxWrapper);
    newItem.appendChild(itemName);
    newItem.appendChild(deleteButton);

    return newItem;
}

function addItem() {
    const itemText = inputItem.value.trim();

    if (itemText) {
        const newItem = createListItem(itemText);
        itemList.appendChild(newItem);
        inputItem.value = '';
    } else {
        alert("Digite o nome de um item para adicionar. ");
    }
}

addItemButton.addEventListener('click', addItem);

inputItem.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addItem();
    }
});

itemList.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('btn_delete')) {
        const listItem = e.target.closest('li');
        listItem.remove();

        alertBox.style.display = 'flex';
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
 
    } 
});

alertButton.addEventListener('click', () => {
    alertBox.style.display = 'none';
});
