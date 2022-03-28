export class Rewiew {
   static create(review) {
      return fetch('https://cats-95088-default-rtdb.europe-west1.firebasedatabase.app/rewiews.json', {
         method: 'POST',
         body: JSON.stringify(review),
         headers: {
            'Content-type': 'application/json'
         }
      })
         .then(response => response.json())
         .then(response => {
            review.id = response.name;
            return review
         })
         .then(addToLocalStorage)
         .then(Rewiew.renderList)
   }
   static renderList() {
      const reviews = getReviewFromLocalStorage();

      const html = reviews.length
         ? reviews.map(toCard).join('')
         : ''

      const list = document.getElementById('reviews');

      list.innerHTML = html;
   }
   static fetch(token) {
      if (!token) {
         return Promise.resolve('<p class = "error">Неккоректные данные</p>')
      }

      return fetch(`https://cats-95088-default-rtdb.europe-west1.firebasedatabase.app/rewiews.json?auth=${token}`)
         .then(response => response.json())
         .then(response => {
            if (response.error) {
               return `<p class = "error">${response.error}</p>`;
            }
            return response ? Object.keys(response).map(e => ({
               ...response[e], id: e
            })) : [];
         })
   }
}

function addToLocalStorage(review) {
   const all = getReviewFromLocalStorage();
   all.push(review);
   localStorage.setItem('reviwes', JSON.stringify(all));
}

function getReviewFromLocalStorage() {
   return JSON.parse(localStorage.getItem('reviwes') || '[]');
}

function toCard(review) {
   console.log(review);
   return (`
      <div class = "review">
         <div class = "review__date">
         ${new Date(review.date).toLocaleDateString()}
         ${new Date(review.date).toLocaleTimeString()}
         </div>
          <div class="review__text">${review.text}</div>
      </div>
      `)
}