const ACTIVE = 'active';
const INACTIVE = 'inactive';

const sortBtn = document.getElementById('sort-btn');
const sortList = document.getElementById('sort-list-wrapper');

const burgerBtn = document.querySelector('.burger-btn');
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const burgerMenu = document.querySelector('.burger-menu-wrapper');

const profileBtn = document.querySelector('.profile-btn');
const shoppingBagBtn = document.querySelector('.shopping-bag-btn');
const popup = document.querySelector('.popup-wrapper');
const popupBackground = document.querySelector('.popup-background');
const popupCloseBtn = document.querySelector('.popup-close-btn');

const loginTab = document.querySelector('.login-outer-wrapper');
const shoppingBagTab = document.querySelector('.shopping-bag-outer-wrapper');

const clickSortBtn = () => {
	sortList.classList.toggle(ACTIVE);
};

const clickBurgerBtn = () => {
	menuOpenBtn.classList.toggle(INACTIVE);
	menuCloseBtn.classList.toggle(ACTIVE);
	burgerMenu.classList.toggle(ACTIVE);
};

const openPopup = () => {
	popup.classList.add(ACTIVE);
	popupBackground.classList.add(ACTIVE);
};

const closePopup = () => {
	popup.classList.remove(ACTIVE);
	popupBackground.classList.remove(ACTIVE);
};

const openLoginTab = () => {
	shoppingBagTab.classList.remove(ACTIVE);
	loginTab.classList.add(ACTIVE);
};

const openShoppingBagTab = () => {
	loginTab.classList.remove(ACTIVE);
	shoppingBagTab.classList.add(ACTIVE);
};

sortBtn.addEventListener('click', clickSortBtn);
burgerBtn.addEventListener('click', clickBurgerBtn);

profileBtn.addEventListener('click', openPopup);
profileBtn.addEventListener('click', openLoginTab);
shoppingBagBtn.addEventListener('click', openPopup);
shoppingBagBtn.addEventListener('click', openShoppingBagTab);
popupCloseBtn.addEventListener('click', closePopup);
