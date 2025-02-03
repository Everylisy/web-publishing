import { toggleTab } from './script.js';

const radioEmail = document.getElementById('radio-email');
const radioNumber = document.getElementById('radio-number');
const emailInput = document.querySelector('.email-input-wrapper');
const numberInput = document.querySelector('.number-input-wrapper');

const checkEmailMethod = () => toggleTab(emailInput, numberInput);
const checkNumberMethod = () => toggleTab(numberInput, emailInput);

radioEmail.addEventListener('click', checkEmailMethod);
radioNumber.addEventListener('click', checkNumberMethod);
