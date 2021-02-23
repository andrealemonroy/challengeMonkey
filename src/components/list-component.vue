<template>
  <div>
    <div v-for="(category, index) in this.categories" :key="index">
      <div v-if="category.strCategory">
        <h2>{{ category.strCategory }}</h2>
        <CardComponent :category="category"> </CardComponent>
      </div>
    </div>
  </div>
</template>
<script>
import CardComponent from "./card-component.vue";
export default {
  name: "ListComponent",
  components: { CardComponent },
  props: {
    categories: Array,
  },
};
</script>
<style>
ul {
  list-style-type: none;
  text-align: left;
  font-size: 42px;
}
</style>
