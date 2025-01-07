const sortButton = document.getElementById('sort-btn');
const sortList = document.getElementById('sort-list-wrapper');

const clickSortButton = () => {
	sortList.classList.toggle('active');
};

sortButton.addEventListener('click', clickSortButton);
