<template>
  <div class="project">
    <span class="text-muted">{{ project.date }}</span>
    <div class="title-container">
    <h1 class="title display-6 font-weight-bold">{{ project.title }}</h1>
    <a :href="project.url" target="_blank" class="icon-container font-weight-bold">
      <font-awesome icon="external-link-alt" class="external" />
    </a>
    </div>
    <p class="text-muted">{{ project.tags }}</p>
    <p class="description">{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object
  }
};
</script>

<style scoped>
.project {
  border-bottom: 1px solid #bfbfbf;
  padding-bottom: 1rem;
  padding-top: 3em;
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

.icon-container {
  color: #00aced;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.external {
  margin-left: 8px;
  font-size: 12px;
}

.external:hover {
  cursor: pointer;
}
</style>
