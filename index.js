const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');


const initialTimeInSeconds = 10 * 60 * 60 ;
const resetTimeInSeconds = 8 * 60 * 60 ;

let currentTimeInSeconds = initialTimeInSeconds;

function updateTimer(){
   const hours = Math.floor(currentTimeInSeconds / 3600);
   const minutes = Math.floor((currentTimeInSeconds % 3600) / 60);
   const seconds = currentTimeInSeconds % 60;


   hoursElement.textContent = String(hours).padStart(2, '0');
   minutesElement.textContent = String(minutes).padStart(2, '');
   secondElement.textContent = String(seconds).padStart(2, '0');

   currentTimeInSeconds--;

   if(currentTimeInSeconds < resetTimeInSeconds){
      currentTimeInSeconds = initialTimeInSeconds;
   }
}

setInterval(updateTimer, 1000)
updateTimer()
