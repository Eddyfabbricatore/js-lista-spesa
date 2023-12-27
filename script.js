const spesa = [
  'pasta',
  'pollo',
  'spiedini',
  'pomodori',
  'carote',
  'latte',
  'yogurt',
  'pane',
  'nutella',
  'mandarini'
];

const message = document.querySelector('ul');

let count = 0;

do{
  message.innerHTML += `<li class="mb-1">${spesa[count]}</li>`; 
  count++;
}while(count < spesa.length);