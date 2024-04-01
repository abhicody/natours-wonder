/* eslint-disable */

import { login, logout } from './login';
import '@babel/polyfill';

//DOM ELEMENTS
const loginForm = document.querySelector('.form');
const logOutBtn = document.querySelector('.nav__el--logout');

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);
