const spesa = [
  'pasta',
  'carne',
  'pomodori'
];

const message = document.querySelector('h1');

let count = 0;

// ciclo do while che stampa l'elemento corrispondente all'indice attuale per poi incrementare il valore del contatore
do{
  message.innerHTML += spesa[count] + ' '; 
  count++;
}while(count < spesa.length);