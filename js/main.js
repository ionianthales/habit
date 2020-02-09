const addBtn = document.querySelector('.habit-container__add-btn');

function addHabits() {
    const list = document.querySelector('.habit-container__main-list');
    const items = document.querySelectorAll('.habit-container__main-item');
    const lastItem = items[items.length-1];

    const item = document.createElement("div");
    item.className = "habit-container__main-item";
    item.id = Number(lastItem.id) + 1;
    item.innerHTML = "item";

    list.appendChild(item);
    console.log(item);
};

addBtn.addEventListener('click', addHabits);