<template>
  <Layout>
    <div class>
      <h1 class="display-3 font-weight-bold">Blog</h1>
      <div>
        <section class="posts">
          <Post v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
        </section>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allPost {
      totalCount
      edges {
        node {
          id
          title
          timeToRead
          description
          date (format: "D MMMM YYYY")
          path
        }
      }
    }
  }
</page-query>
<script>
import Post from "../components/post/Post";
export default {
  components: { Post },
  metaInfo: {
    title: "Blog"
  }
};
</script>
