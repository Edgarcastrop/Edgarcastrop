import { createStore } from 'vuex'

export default createStore({
  state: {
    harina: 50,
    Azucar: 100,
    Leche: 60,
    Levadura: 15,
    Mantequilla: 20,
    Chocolate: 40,
  
    Pasteldeunpisoh: 5,
    PasteldedospisosA: 2,
    PasteldedospisosL: 4,
    PasteldedospisosLv:0.3,
    PasteldedospisosM: 0.7,
    PasteldeunpisoC: 2,

    Pasteldedospisosh: 8,
    PasteldedospisosA: 5,
    PasteldedospisosL: 8,
    PasteldedospisosLv:0.6,
    PasteldedospisosM: 0.9,
  },
  getters: {
  },
  mutations: {
    Enviarpedido(state){
      var harinat = state.harina -= state.Pasteldeunpisoh
      console.log(harinat)
    }
  },
  actions: {
  },
  modules: {
  }
})
