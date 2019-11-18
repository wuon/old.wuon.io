<template>
  <Layout>
    <br />
    <p class="font-big-1">
      <g-link to="/blog" class="go-back font-weight-bold">
        <font-awesome icon="long-arrow-alt-left" class="arrow" />
        <u>Go back</u>
      </g-link>
    </p>
    <div class="post-title">
      <h1 class="display-3 font-weight-bold">{{$page.post.title}}</h1>
      <p class="post-date text-muted">{{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
    </div>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            id
            title
            content
            date (format: "D MMMM YYYY")
            timeToRead
        }
    }
</page-query>

<script>
export default {
  name: "Post"
};
</script>

<style scoped>

.go-back {
  color: #00aced;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.arrow {
  margin-right: 8px;
  font-size: 16px;
}

u {
  text-decoration: none;
}

</style>
