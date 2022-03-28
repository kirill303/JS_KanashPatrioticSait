import kanshB from './imgs/KanashB.jpg';
import kanshSM from './imgs/KanashSM.png';
import kanshSSM from './imgs/KanashSSM.png';


export function ways() {
   const kb = document.getElementById('kb')
   if (window.screen.width >= 768) {
      kb.src = kanshB;
   } else if (window.screen.width >= 425) {
      kb.src = kanshSM
   } else if (window.screen.width >= 0) {
      kb.src = kanshSSM;
   }

}

