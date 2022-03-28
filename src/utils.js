import { Rewiew } from "./rewiew";


const name = document.getElementById('name');

export default function submitMainForm(event) {
   event.preventDefault();
   const review = {
      text: name.value.trim(),
      date: new Date().toJSON(),
   }
   Rewiew.create(review);
   console.log(review);
   name.value = '';
   btnDisabled();

}

