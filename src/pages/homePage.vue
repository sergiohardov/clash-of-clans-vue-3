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
          img: require("@/assets/img/archer.png"),
          lvl: 4,
        },
        {
          id: 2,
          title: "Wizard",
          desc: "Wizard Wizard arcWizarder",
          img: require("@/assets/img/wizard.png"),
          lvl: 5,
        },
      ],
    };
  },
};
</script>
