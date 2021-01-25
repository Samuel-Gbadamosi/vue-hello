var ready = new Vue({
  el: '#ready',
  data: {
    message: 'Hello there!',
    red : 'Welcome to Vue world'

  },
  methods : {
    grace: function(){
    if (this.message){
      this.message = this.red
    } 
    }
  },



})


// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// // Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.
// Se volete potete personalizzare l'esercizio come volete, aggiungendo altre cose viste a lezione!
// Buon lavoro :laptop_parrot: (edited)
