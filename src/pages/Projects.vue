<template>
  <Layout>
    <div class>
      <h1 class="display-3 font-weight-bold">Projects</h1>
      <section class="project-container">
        <Project v-for="edge in $static.allProject.edges" :key="edge.node.id" :project="edge.node" />
      </section>
    </div>
  </Layout>
</template>

<static-query>
query {
  allProject(sortBy: "release", order: DESC) {
    totalCount
    edges {
      node {
        id
        date
        title
        description
        tags
        url
        path
      }
    }
  }
}
</static-query>

<script>
import Project from "../components/project/Project";
export default {
  components: { Project },
  metaInfo: {
    title: "Project"
  }
};
</script>
