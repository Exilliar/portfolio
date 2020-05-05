<template>
  <v-content>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <h3>Rory Webber</h3>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <Button to="/" title="Home" />
      <Button to="/about" title="About" />
      <Button to="/projects" title="Projects" />
      <Button to="/qualifications" title="Qualifications" />
    </v-app-bar>
  </v-content>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/TheButton.vue";

@Component({
  components: {
    Button,
  },
})
export default class TheHeader extends Vue {}
</script>
