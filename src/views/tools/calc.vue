<template>
  <h1>Calculator</h1>
  <router-link class="text-dark nav-link" to="/tools">Previous</router-link>
  <div class="container">
    <div class="row">
      <div class="input-group mb-3">
        <input v-model="displayCalc" class="form-control" disabled />
      </div>
      <div class="row justify-content-center">
        <div class="row justify-content-center mb-3">
          <div class="col-1">
            <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="bagi">/</button>
          </div>
          <div class="col-1">
            <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="tambah">+</button>
          </div>
          <div class="col-1">
            <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="kali">*</button>
          </div>
          <div class="col-1">
            <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="kurang">-</button>
          </div>
        </div>
        <div class="col-1">
          <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="7">7</button>
          <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="4">4</button>
          <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="1">1</button>
        </div>
        <div class="col-1">
          <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="8">8</button>
          <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="5">5</button>
          <button @click="addDisplay($event)" type="button" class="btn btn-outline-primary" id="2">2</button>
        </div>
        <div class="col-1">
          <button @click="addDisplay($event)" type="button" id="9" class="btn btn-outline-primary">9</button>
          <button @click="addDisplay($event)" type="button" id="4" class="btn btn-outline-primary">6</button>
          <button @click="addDisplay($event)" type="button" id="3" class="btn btn-outline-primary">3</button>
        </div>
        <div class="col-1">
          <div>
            <button @click="addDisplay($event)" type="button" id="tambah" class="btn btn-outline-primary py-4">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-5">
          <button
            @click="addDisplay($event)"
            type="button"
            class="btn btn-outline-primary"
            style="padding: 5px 2.5rem 5px 2rem; margin-left: 1.2rem"
            id="0"
          >
            0
          </button>
          <button @click="addDisplay($event)" type="button" id="enter" class="btn btn-outline-primary">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      displayCalc: '',
      operators:'',
    }
  },
  methods: {
    addDisplay(event) {
      
      let angka = ['1','2','3','4','5','6','7','8','9','0']
      let operator = ['tambah','kurang','kali','bagi']
      let selected = event.currentTarget.id;
      if(angka.includes(selected)){
        this.displayCalc += event.currentTarget.id;
        console.log(this.displayCalc)
      }
      if (operator.includes(selected)){
        this.operators = event.currentTarget.id;
          console.log(this.operators)
        
      }
      
    
    },
  },
  computed: {},
}
</script>
