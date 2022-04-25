<template>
  <div class="card">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img :src="imgUrl" :alt="title" class="card-img" />
    </div>
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot></slot>
    </div>
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
  },
};
</script>
