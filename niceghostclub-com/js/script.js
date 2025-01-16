const ACTIVE = 'active';
const INACTIVE = 'inactive';

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
	loginTab.classList.remove(ACTIVE);
	shoppingBagTab.classList.remove(ACTIVE);
};

const toggleTab = (activeTab, inactiveTab) => {
	inactiveTab.classList.remove(ACTIVE);
	activeTab.classList.add(ACTIVE);
};

const openLoginTab = () => toggleTab(loginTab, shoppingBagTab);
const openShoppingBagTab = () => toggleTab(shoppingBagTab, loginTab);

burgerBtn.addEventListener('click', clickBurgerBtn);

profileBtn.addEventListener('click', openPopup);
profileBtn.addEventListener('click', openLoginTab);
shoppingBagBtn.addEventListener('click', openPopup);
shoppingBagBtn.addEventListener('click', openShoppingBagTab);
popupCloseBtn.addEventListener('click', closePopup);
