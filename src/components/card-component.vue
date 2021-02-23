<template>
  <div class="container">
    <div
      v-for="(drink, index) in drinks"
      :key="index"
      @click="openModal(drink)"
    >
    <div class="card-body">
      <figure v-if="drink">
        <img :src="drink.strDrinkThumb" />
        <figcaption>
          <h3>{{ drink.strDrink }}</h3>
        </figcaption>
      </figure>
    </div>
    </div>
    <modal :show="showModal" :drink="this.drink">
      <template v-slot:header>
        <button type="button" class="modal__close" @click="closeModal()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </button>
      </template>
    </modal>
  </div>
</template>

<script>
import { listDrinks, getDrink } from "../api/drinks";
import Modal from "./modal.vue";
export default {
  components: { Modal },
  name: "CardComponent",
  data() {
    return {
      drinks: Array,
      showModal: false,
      drink: Object,
    };
  },
  props: {
    category: Object,
  },
  created() {
    this.fetchDrinks(this.category.strCategory);
  },
  methods: {
    fetchDrinks(category) {
      listDrinks(category).then(({ data }) => {
        this.drinks = data.drinks;
        console.log(this.drinks);
      });
    },
    openModal(drink) {
      getDrink(drink.idDrink).then(({ data }) => {
        this.showModal = true;
        this.drink = data.drinks[0];
        document.querySelector("body").classList.add("overflow-hidden");
      });
    },
    closeModal() {
      this.showModal = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
  },
};
</script>
