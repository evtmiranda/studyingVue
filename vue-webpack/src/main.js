import Vue from 'vue'
import {Time} from './time'

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

new Vue({
  el: '#app',
  data:{
    times:[
      new Time("São Paulo FC", require("./assets/logo.png")),
      new Time("Barcelona FC", require("./assets/logo.png")),
      new Time("Bayern FC", require("./assets/logo.png")),
      new Time("Real Madrid", require("./assets/logo.png")),
    ],
    novoJogo:{
      casa:{
        time: null,
        gols: 0
      },
      fora:{
        time: null,
        gols: 0
      }
    }
  },
  created(){
    let indexCasa = Math.floor(Math.random() *  4);
    let indexFora = Math.floor(Math.random() *  4);

    this.novoJogo.casa.time = this.times[indexCasa];
    this.novoJogo.casa.gols = 2;
    this.novoJogo.fora.time = this.times[indexFora];
    this.novoJogo.fora.gols = 3;
  }
})
