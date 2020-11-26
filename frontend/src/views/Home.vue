<template>
  <div class="container">
    <div class="item">
      <SubmitLink @click="onClick" />
    </div>
    <div class="item">
      <LinksTable :shortenedLinks="shortenedLinks" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SubmitLink from "@/components/SubmitLink.vue";
import LinksTable from "@/components/LinksTable.vue";
import { LinkPair, LinksService } from "../services/links-service";

@Component({
  components: {
    SubmitLink,
    LinksTable
  }
})
export default class Home extends Vue {
  public shortenedLinks: LinkPair[] = [];
  private linksService!: LinksService;

  async created() {
    const beAddress = process.env.VUE_APP_BE_ADDRESS;
    this.linksService = new LinksService(beAddress);
    await this.loadLinks();
  }

  async onClick(link: string): Promise<void> {
    if (!link) return;

    await this.linksService.shortenLink(link);

    await this.loadLinks();
  }

  private async loadLinks(): Promise<void> {
    const allLinksResult = await this.linksService.getAll();
    this.shortenedLinks = allLinksResult.data.links.reverse();
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item {
  flex-grow: 1;
  margin: 5px 0;
}
</style>
