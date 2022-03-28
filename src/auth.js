export function getAuthForm() {
   return ` 
   <form class="modal__form" id="modal-form">
      <label for="modal-name">Email</label>
      <input type="email" id="modal-name" class = "modal__name"min ='1'>
      <label for="modal-password">Пароль</label>
      <input type="password" id="modal-password" class = "modal__password">
      <input type = "submit" id = "modal-submit" value = "Войти">
   </form>
   
   `
}

export async function authWithEmailAndPassword(email, password) {
   const API_KEY = 'AIzaSyAA3naiRgVi4c_tXa2T8fi1xBlSAMoCXTI'
   return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
         email,
         password,
         returnSecureToken: true
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   })
      .then(response => response.json())
      .then(data => data.idToken);
}