<template>
  <v-footer :color="color">
    <v-card width="100%" flat tile :color="color" class="text-center">
      <v-card-text class="white--text">
        <h2>{{ ContactInfo }}</h2>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import info from "@/data/ContactInfo.ts";

@Component
export default class TheFooter extends Vue {
  private color = "info";

  contactInfo = info;

  get ContactInfo() {
    return (
      "Contact - Phone: " +
      this.contactInfo.phone +
      " - Email: " +
      this.contactInfo.email +
      " - GitHub: " +
      this.contactInfo.github
    );
  }
}
</script>
