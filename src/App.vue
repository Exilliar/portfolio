<template>
  <v-app>
    <TheHeader />
    <v-content>
      <router-view />
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

@Component({
  components: {
    TheHeader,
    TheFooter,
  },
})
export default class App extends Vue {}
</script>
