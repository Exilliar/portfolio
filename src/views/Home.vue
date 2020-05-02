<template>
  <v-container>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { HelloWorld },
})
export default class Home extends Vue {}
</script>
