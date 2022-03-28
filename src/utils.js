import { Rewiew } from "./rewiew";


const name = document.getElementById('name');
let themeState = true;

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

export function colors() {
   themeState = !themeState;
   const body = document.body;
   if (themeState) {
      body.style.setProperty('--colorBase1', '#999999');
      body.style.setProperty('--colorBase2','#666666');
      body.style.setProperty('--colorBase3', '#888888');
      body.style.setProperty('--colorBase7', '#121212');
      body.style.setProperty('--fontColor', '#121212');
      body.style.setProperty('--colorBaseBack1', 'whitesmoke');
   } else {
      body.style.setProperty('--colorBase1', '#660000');
      body.style.setProperty('--colorBase2','#990000');
      body.style.setProperty('--colorBase3', '#AA9900');
      body.style.setProperty('--colorBase7', '#120000');
      body.style.setProperty('--fontColor', '#A2260B');
      body.style.setProperty('--colorBaseBack1', '#FFDE00');
   }
   console.log(body.style.getPropertyValue('--colorBase1'));
   // --colorBase2:#660000;
   // --colorBase1:#990000;
   // --colorBase3:#AA9900;
   // --colorBase7:#120000;
   // --fontColor:#A2260B;
   // --colorBaseBack1:#FFDE00;
}