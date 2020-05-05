<template>
  <v-app>
    <v-content>
      <TheHeader></TheHeader>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/TheHeader.vue";

@Component({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {}
</script>
