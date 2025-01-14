const ACTIVE = 'active';
const INACTIVE = 'inactive';

const sortBtn = document.getElementById('sort-btn');
const sortList = document.getElementById('sort-list-wrapper');

const burgerBtn = document.querySelector('.burger-btn');
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const burgerMenu = document.querySelector('.burger-menu-wrapper');

const profileBtn = document.querySelector('.profile-btn');
const popup = document.querySelector('.popup-wrapper');
const popupBackground = document.querySelector('.popup-background');
const popupCloseBtn = document.querySelector('.popup-close-btn');

const clickSortBtn = () => {
	sortList.classList.toggle(ACTIVE);
};

const clickBurgerBtn = () => {
	menuOpenBtn.classList.toggle(INACTIVE);
	burgerMenu.classList.toggle(ACTIVE);
	menuCloseBtn.classList.toggle(ACTIVE);
};

const openPopup = () => {
	popup.classList.add(ACTIVE);
	popupBackground.classList.add(ACTIVE);
};

const closePopup = () => {
	popup.classList.remove(ACTIVE);
	popupBackground.classList.remove(ACTIVE);
};

sortBtn.addEventListener('click', clickSortBtn);
burgerBtn.addEventListener('click', clickBurgerBtn);
profileBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
