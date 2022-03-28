import { authWithEmailAndPassword, getAuthForm } from './auth';
import { colors, ways } from './image_way';
import { Rewiew } from './rewiew';
import './style.css';
import submitMainForm from './utils';

function thisEnter(key) {
   if (key.keyCode === 13) {
      return btnDisabled() && submitMainForm();
   }
}
function btnDisabled() {
   const eventIf = !(name.value.length >= 14);
   btn.disabled = eventIf;
   btn.style.backgroundColor = `var(--colorBase${eventIf ? '2' : '7'})`;
   return eventIf;
}

function modalClick(e) {
   console.log('e');
   imageModalCount++;
   if (!(imageModalCount % 5)) {
      openModal('Вход', getAuthForm());
   } else {
      closeModal();
   }
}


function closeModal() {
   document.body.style.overflow = 'scroll';
   modal.style.display = 'none';
   modalOverlay.style.display = 'none';
}
function createModal(title, content) {
   document.body.style.overflow = 'hidden';
   modal.style.display = 'block';
   modalTitle.innerHTML = title;
   modalText.innerHTML = content;
   modalOverlay.style.display = 'block';
}
function openModal(title, content) {
   console.log(modal);
   createModal(title, content)
   document
      .getElementById('modal-form')
      .addEventListener('submit', authFormHandler);

}

function authFormHandler(event) {
   console.log('e');
   event.preventDefault();

   const email = event.target.querySelector('#modal-name').value;
   const password = event.target.querySelector('#modal-password').value;
   authWithEmailAndPassword(email, password)
      .then(Rewiew.fetch)
      .then(renderModalAfterAuth)
}
function renderModalAfterAuth(content) {
   console.log(content);
   if (typeof content === 'string') {
      closeModal();
      return createModal('Ошибка', content)
   }
   return createModal('Все отзывы', listToHtml(content))
}
function listToHtml(content) {
   const list = content.map(e => {
      return `
      <li id= "${e.id}" class = "review modal__review">
      <p class = "review__date"> 
      ${new Date(e.date).toLocaleDateString()}
      ${new Date(e.date).toLocaleTimeString()}
      </p>
      <p class = "review__text">${e.text}</p>
      </li>
      `
   }).join('')
   return `<div class = "modal__ul">${list}</div>`
}

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal__title');
const modalText = document.getElementById('modal__text');
const form = document.getElementById('main-form');
const name = document.getElementById('name');
const btn = document.getElementById('submit');
const imageModal = document.getElementById('kb');
const modalOverlay = document.getElementById('modal__overlay');
const theme = document.getElementById('theme');

let imageModalCount = 0;

theme.addEventListener('click', colors)
modalOverlay.addEventListener('click', modalClick);
imageModal.addEventListener('click', modalClick);
window.addEventListener('load', Rewiew.renderList);
form.addEventListener('submit', submitMainForm);
name.addEventListener('input', btnDisabled);
name.addEventListener('keypress', thisEnter);
ways();
btnDisabled();
