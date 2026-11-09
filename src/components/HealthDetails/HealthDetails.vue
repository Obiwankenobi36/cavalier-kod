<template>
  <div class="services-details-area ptb-100">
    <div class="container">
      <div v-if="newsId == 1"><HealthNews1 /></div>
      <div v-if="newsId == 2"><HealthNews2 /></div>
      <div v-if="newsId == 3"><HealthNews3 /></div>
      <div v-if="newsId == 4"><HealthNews4 /></div>
    </div>
  </div>
</template>

<script>
import HealthNews1 from "./HealthNews-1.vue";
import HealthNews2 from "./HealthNews-2.vue";
import HealthNews3 from "./HealthNews-3.vue";
import HealthNews4 from "./HealthNews-4.vue";

export default {
  name: "NewsDetails",
  props: ["newsId"],
  components: {
    HealthNews1,
    HealthNews2,
    HealthNews3,
    HealthNews4,
  },
  methods() {},
};
</script>
