<template>
  <div class="container">
    <div class="item">{{ link }}</div>
    <button class="copy-button" @click="copyLinkToClipboard">Copy</button>
  </div>
</template>

<script lang="ts">
import copy from "copy-to-clipboard";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class LinkItem extends Vue {
  @Prop()
  public link!: string;

  copyLinkToClipboard(): void {
    copy(this.link);
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.item {
  flex-grow: 1;
}

.copy-button {
  font-size: 1.2rem;
}
</style>
