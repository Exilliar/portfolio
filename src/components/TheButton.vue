<template>
  <v-btn class="ma-1" color="secondary" :to="to">{{ title }}</v-btn>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() private title!: string;
  @Prop() private to!: string;
}
</script>
