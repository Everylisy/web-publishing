const agreeAllCheckbox = document.getElementById('agree-all-checkbox');
const checkboxes = document.querySelectorAll('.terms-checkbox-wrapper input');
const checkboxArr = [...checkboxes];

const syncCheckboxState = (arr, targetElem) => {
	arr.map((el) => {
		el.checked = targetElem.checked ? true : false;
	});
};

const clickAgreeAll = (event) => {
	syncCheckboxState(checkboxArr, event.target);
};

agreeAllCheckbox.addEventListener('change', clickAgreeAll);
