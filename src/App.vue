<template>
  <div id="app">
    <div>
      <div class="banner"> 
        <h1>Esta página fue creada como reto</h1>
        <button @click="this.goToChallenge">Míralo aquí</button>
      </div>
      <ListComponent id="challenge" :categories="categories" />
    </div>
  </div>
</template>

<script>
import ListComponent from './components/list-component.vue'
import { categories } from "@/api/drinks";
export default {
  name: "App",
  components: {
    ListComponent
  },
  data() {
    return {
      categories: null,
    };
  },
  created() {
    this.fetchDrinks();
  },
  methods: {
    fetchDrinks() {
      categories()
        .then(({ data }) => {
          this.categories = data.drinks;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goToChallenge(){
      const element = document.getElementById('challenge');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },
};
</script>

<style>
@import "./assets/GlobalStyles.css";
</style>
