<template>
  <div class="wrapper">
    <div v-if="item">
      <img :src="item.img" :alt="item.desc" />
      <h1 class="tite">{{ item.title }}</h1>
      <p>{{ item.desc }}</p>

      <div>
        <router-link to="/" class="btn btnPrimary">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items";

export default {
  data() {
    return {
      item: null,
    };
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((el) => el.alias === alias);

    this.item = item;
  },
};
</script>
