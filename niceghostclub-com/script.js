const sortButton = document.getElementById('sort-btn');
const sortList = document.getElementById('sort-list-wrapper');

const burgerBtn = document.querySelector('.burger-btn');
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const burgerMenu = document.querySelector('.burger-menu-wrapper');

const clickSortButton = () => {
	sortList.classList.toggle('active');
};

const clickBurgerBtn = () => {
	menuOpenBtn.classList.toggle('inactive');
	burgerMenu.classList.toggle('active');
	menuCloseBtn.classList.toggle('active');
};

sortButton.addEventListener('click', clickSortButton);
burgerBtn.addEventListener('click', clickBurgerBtn);
