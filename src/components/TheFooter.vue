<template>
  <v-footer :color="color">
    <v-card width="100%" flat tile :color="color" class="text-center">
      <v-card-text class="white--text">
        <h2>Contact Info</h2>
        <span v-for="contact in contactInfo" :key="contact.type" class="ma-2">
          <strong>{{ ContactType(contact) }}</strong
          >: {{ ContactValue(contact) }}
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import contactInfo from "@/data/ContactInfo.ts";
import Contact from "@/models/Contact.ts";

@Component
export default class TheFooter extends Vue {
  private color = "info";

  contactInfo = contactInfo;

  // The generic type in the below 2 functions can be "any"
  // as it does not matter which type the generic is in order for these functions to work
  ContactType(contact: Contact<any>) {
    return contact.type;
  }
  ContactValue(contact: Contact<any>) {
    return contact.value;
  }
}
</script>
