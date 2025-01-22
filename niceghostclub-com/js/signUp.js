const agreeAllCheckbox = document.getElementById('agree-all-checkbox');
const checkboxes = document.querySelectorAll('.terms-checkbox-wrapper input');
const checkboxArr = [...checkboxes];

const receiveInfoCheckbox = document.getElementById('recieve-info-checkbox');
const smsEmailCheckboxes = document.querySelectorAll(
	'.sms-email-option-wrapper input'
);
const smsEmailCheckboxArr = [...smsEmailCheckboxes];

const syncCheckboxState = (arr, targetElem) => {
	arr.map((el) => {
		el.checked = targetElem.checked ? true : false;
	});
};

const clickAgreeAll = (event) => {
	syncCheckboxState(checkboxArr, event.target);
};

const clickRecieveInfo = (event) => {
	syncCheckboxState(smsEmailCheckboxArr, event.target);
};

agreeAllCheckbox.addEventListener('change', clickAgreeAll);
receiveInfoCheckbox.addEventListener('change', clickRecieveInfo);
