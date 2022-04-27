<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <TheCard
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`${item.alias}`"
      >
        <template v-slot:body>{{ item.desc }}</template>
        <template v-slot:footer>
          <div class="card-stats">
            <div
              v-for="(stat, index) in item.info"
              :key="index"
              class="one-third"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat">{{ stat.title }}</div>
            </div>
          </div>
        </template>
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
