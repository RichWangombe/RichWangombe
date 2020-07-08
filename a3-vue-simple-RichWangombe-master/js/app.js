/*
  @TODO : Add Script

  Details;
  1. Formula for calculating IDW by
      - Male:	 50.0 kg + 2.3 kg per inch per inch over 5 feet : B. J. Devine Formula (1974)
      - Female:	49 kg + 1.7 kg per inch over 5 feet : J. D. Robinson Formula (1983)
  2. BMI Formula : kg/(height in metres * height in metres)
  3. jQuery for modifying bound name result(color change)
  4. Enable tooltips

*/
<link rel="stylesheet" href="https://cdn.jsdelivr.net/vue/1.0.26/vue.min.js">
let vm = new Vue({
  el: '#app',
  data () {
    return {
      weight: '',
      height: '',
      result: 'Click "Calculate"'
    }
  },
  methods: {
    calculate() {
      let weight = parseFloat(this.weight)
      let height = parseFloat(this.height) / 100
      this.result = weight / (height * height)
    }
  }
})
