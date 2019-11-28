<template>
  <Layout>
    <div>
      <h1 class="display-3 font-weight-bold">Gallery</h1>
      <div>
        <section class="card-columns">
          <Card
            v-for="edge in $page.allInstagramPhoto.edges"
            :key="edge.node.id"
            :card="edge.node"
          />
        </section>
      </div>
    </div>
  </Layout>
</template>

<page-query>
    query {
        allInstagramPhoto {
            edges {
                node {
                    display_url
                }
            }
        }
    }
</page-query>

<script>
import Card from "../components/gallery/Card";
export default {
  components: { Card },
  metaInfo: {
    title: "Gallery"
  }
};
</script>

<style scoped>
.card-columns {
  column-count: 1;
  -webkit-column-count: 1;
}
</style>
