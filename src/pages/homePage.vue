<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <TheCard :name="`${item.lvl} lvl`" :title="item.title">
        {{ item.desc }}
      </TheCard>
    </div>
  </div>
</template>

<script>
import TheCard from "@/components/UI/TheCard";
export default {
  components: { TheCard },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Archer",
          desc: "archer archer archer",
          lvl: 4,
        },
        {
          id: 2,
          title: "Wizard",
          desc: "Wizard Wizard arcWizarder",
          lvl: 5,
        },
      ],
    };
  },
};
</script>
