<template>
  <Layout>
    <div class="row center">
      <div class="col-md-4">
        <h1 class="display-4 font-weight-bold">The story so far</h1>
        <p class="font-big-1">
          Currently a 3rd year student with 1.5
          years of industry experience and 2 years
          of startup culture. I have participated in
          15+ hackathons, winning 7 titles
          including Canada’s largest, Hack the
          North, in 2016. I consider myself a
          learning machine and can approach any
          problem intuitively. I am designer,
          developer, and most importantly a doer.
        </p>
        <p class="font-big-1">
          <a href="/blog" class="email font-weight-bold">
            <u>Read more</u>
            <font-awesome icon="long-arrow-alt-right" class="arrow" />
          </a>
        </p>
      </div>
      <div class="col-md-8">
        <img class="graphic" src="../assets/bench.svg" />
      </div>
    </div>
    <div class="p-5 bg-light my-4 bg-black">
      <h1
        class="serif-font-face"
      >“To try and fail is at least to learn; to fail to try is to suffer the inestimable loss of what might have been.”</h1>
      <div
        class="pt-5 text-muted small author"
      >- Brian Christian, Algorithms To Live By: The Computer Science of Human Decisions</div>
    </div>
    <div class="row center">
      <div class="col-md-12">
        <recent-partners />
      </div>
    </div>
    <div class="row center">
      <div class="col-md-12">
        <recent-projects />
      </div>
    </div>
  </Layout>
</template>

<script>
import RecentPartners from "../components/home/RecentPartners.vue";
import RecentProjects from "../components/home/RecentProjects.vue";
export default {
  components: {
    RecentPartners,
    RecentProjects
  },
  metaInfo: {
    title: "Home"
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
u {
  text-decoration: none;
}

.home-links a {
  margin-right: 1rem;
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

.author {
  padding-top: 1rem !important;
}

.graphic {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
}

.center {
  display: flex;
  align-items: center;
}
</style>
