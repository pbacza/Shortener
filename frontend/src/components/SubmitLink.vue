<template>
  <div>
    <input
      class="link-input"
      type="text"
      name="link"
      id="link"
      placeholder="link"
      v-model="value"
    />
    <button class="submit-button" @click="click">Shorten</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component({})
export default class SubmitLink extends Vue {
  public value = "";

  @Emit()
  click(): string {
    const link = this.value;
    this.value = "";
    return link;
  }
}
</script>

<style lang="scss" scoped>
.submit-button {
  font-size: 1.4rem;
}

.link-input {
  font-size: 1.3rem;
}
</style>
