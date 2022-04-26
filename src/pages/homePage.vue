<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <TheCard :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img">
        {{ item.desc }}
      </TheCard>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import TheCard from "@/components/UI/TheCard";
export default {
  components: { TheCard },
  data() {
    return {
      items: items,
    };
  },
};
</script>
