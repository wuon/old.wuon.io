<template>
  <div class="post">
    <span class="text-muted" v-html="post.date" />
    <span class="text-muted"> | {{post.timeToRead}} min read</span>
    <h1 class="title display-5 font-weight-bold" v-html="post.title" />
    <p class="description" v-html="post.description" />
    <p class="font-big-1">
      <g-link :to="post.path" class="read-more font-weight-bold">
        <u>Read more</u>
        <font-awesome icon="long-arrow-alt-right" class="arrow" />
      </g-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object
  }
};
</script>

<style scoped>
.post {
  border-bottom: 1px solid #bfbfbf;
  padding-bottom: 1rem;
  padding-top: 3em;
}

.read-more {
  color: #00aced;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.description {
  margin-bottom: 16px;
}

.arrow {
  margin-left: 8px;
  font-size: 16px;
}

u {
  text-decoration: none;
}
</style>
