<template>
  <div>
    <div class="container">
      <div class="filler"></div>
      <div class="item">
        <table>
          <tr>
            <th>Shortened Link</th>
            <th>Original Link</th>
          </tr>

          <tr v-for="item in shortenedLinks" :key="item.shortLink">
            <td>
              <LinkItem class="border" :link="item.shortLink" />
            </td>
            <td>
              <LinkItem class="border" :link="item.originalLink" />
            </td>
          </tr>
        </table>
      </div>
      <div class="filler"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LinkItem from "./LinkItem.vue";

@Component({ components: { LinkItem } })
export default class LinksTable extends Vue {
  @Prop()
  public shortenedLinks!: Array<unknown>;
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  flex-grow: 2;
}

.filler {
  flex-grow: 1;
}

table {
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #00c3b9;
  }
}
</style>
