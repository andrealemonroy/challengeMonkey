<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__dialog">
        <div class="modal__header">
          <slot name="header" />
        </div>

        <div class="modal__body">
          <figure v-if="drink">
            <img :src="drink.strDrinkThumb" />
            <figcaption>
              <h3>{{ drink.strCategory }}</h3>
              <h3>{{ drink.strDrink }}</h3>
              <h3>{{ drink.strInstructions }}</h3>
            </figcaption>
          </figure>
          <p>{{ drink.strIngredient1 }} - {{ drink.strMeasure1 }}</p>
          <p>{{ drink.strIngredient2 }} - {{ drink.strMeasure2 }}</p>
          <p>{{ drink.strIngredient3 }} - {{ drink.strMeasure3 }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  props: {
    show: Boolean,
    drink: null,
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
}
.modal__backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.modal__dialog {
  position: relative;
  width: 400px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

@media screen and (max-width: 992px) {
  .modal__dialog {
    width: 90%;
  }
}
.modal__body {
  padding: 10px 20px 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: auto
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
