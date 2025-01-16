const sortBtn = document.getElementById('sort-btn');
const sortList = document.getElementById('sort-list-wrapper');

const clickSortBtn = () => {
	sortList.classList.toggle(ACTIVE);
};

sortBtn.addEventListener('click', clickSortBtn);
