<template>
  <div class="card">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img :src="imgUrl" :alt="title" class="card-img" />
    </div>
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot name="body"></slot>

      <router-link
        class="link"
        style="display: block; margin-top: 10px"
        v-if="link"
        :to="link"
        >See More</router-link
      >
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>
