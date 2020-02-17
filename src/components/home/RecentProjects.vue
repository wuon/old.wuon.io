<template>
  <div>
    <div class="home-heading">
      <h1 class="display-5 font-weight-bold">Recent projects</h1>
      <p
        class="font-big-1"
      >During my free time, I like to explore around with new ideas and emerging tech.</p>
    </div>
    <section class="project-container">
      <div class="project" v-for="edge in $static.allProject.edges" :key="edge.node.id">
        <span class="text-muted">{{ edge.node.date }}</span>
        <div class="title-container">
          <h1 class="title display-6 font-weight-bold">{{ edge.node.title }}</h1>
          <a :href="edge.node.url" target="_blank" class="email font-weight-bold">
            <font-awesome icon="external-link-alt" class="external" />
          </a>
        </div>
        <p class="text-muted">{{ edge.node.tags }}</p>
        <p class="description">{{ edge.node.description }}</p>
      </div>
    </section>
    <!--
    <div class="more">
      <p class="font-big-1">
        <a href="/blog" class="email font-weight-bold">
          <u>View more</u>
          <font-awesome icon="long-arrow-alt-right" class="arrow" />
        </a>
      </p>
    </div>
    -->
  </div>
</template>

<static-query>
query {
    allProject(sortBy: "release", order: DESC, limit: 4) {
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
export default {
  name: "RecentProjects"
};
</script>

<style scoped>

u {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: #00aced;
}

.home-heading {
  margin: 24px 0;
}

.email {
  color: #00aced;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.arrow {
  margin-left: 8px;
  font-size: 16px;
}

.project-container {
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  flex-wrap: wrap;
}

.project {
  width: 50%;
  padding: 24px;
  border-top: 1px solid #bfbfbf;
  border-left: 1px solid #bfbfbf;
  transition: 300ms all;
}

.project:hover {
  background-color: #f8f9fa;
}

.project:nth-child(2) {
  border-right: 1px solid #bfbfbf;
}
.project:nth-child(3) {
  border-bottom: 1px solid #bfbfbf;
}
.project:nth-child(4) {
  border-right: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
}

.title-container {
  display: flex;
  align-items: center;
}

.title {
  margin-bottom: 0;
}

.description {
  margin-bottom: 0px;
}

.more {
  float: right;
  margin-top: 16px;
}

.external {
  margin-left: 8px;
  font-size: 12px;
}

.external:hover {
  cursor: pointer;
}

@media only screen and (max-width: 1250px) {
  .project {
    width: 100%;
  }
  .project:nth-child(1) {
    border-right: 1px solid #bfbfbf;
  }
  .project:nth-child(2) {
    border-right: 1px solid #bfbfbf;
  }
  .project:nth-child(3) {
    border-right: 1px solid #bfbfbf;
    border-bottom: none;
  }
  .project:nth-child(4) {
    border-right: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
  }
}

</style>
