<template>
  <Layout>
    <div>
      <h1 class="display-2 serif-font-face">Photography</h1>
        <div>
            <section class="card-columns">
                <Card  v-for="edge in $page.allInstagramPhoto.edges" :key="edge.node.id" :card="edge.node"/>
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
                    edge_media_to_caption {
                        edges {
                            node {
                                text
                            }
                        }
                    }
                }
            }
        }
    }
</page-query>

<script>
    import Card from "../components/portfolio/Card";
    export default {
        components: {Card},
        metaInfo: {
            title: 'Photography'
        }
    }
</script>

<style scoped>
    .card-columns{
        column-count: 1;
        -webkit-column-count: 1;
    }
</style>
