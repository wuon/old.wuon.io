<template>
  <div>
    <div class="home-heading">
      <h1 class="display-5 font-weight-bold">Previous partners</h1>
      <p
        class="font-big-1"
      >Over the past couple of years, I have been incredibly fortunate to work with some amazing companies.</p>
    </div>
    <section class="company-container">
      <div class="company" v-for="edge in $static.allPartner.edges" :key="edge.node.id">
        <span class="text-muted">{{ edge.node.date }}</span>
        <h1 class="title display-6 font-weight-bold">{{ edge.node.title }}</h1>
        <p class="text-muted">{{ edge.node.role }}</p>
        <p
          class="description"
        >{{ edge.node.description }}</p>
      </div>
    </section>
    <div class="more">
      <p class="font-big-1">
        <a href="/blog" class="email font-weight-bold">
          <u>View more</u>
          <font-awesome icon="long-arrow-alt-right" class="arrow" />
        </a>
      </p>
    </div>
  </div>
</template>

<static-query>
query {
    allPartner(sortBy: "exit", order: DESC, limit: 4) {
        totalCount
        edges {
            node {
                id
                date
                title
                role
                description
                path
            }
        }
    }
}
</static-query>

<script>
export default {
  name: "RecentPartners"
};
</script>

<style>
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

.company-container {
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

.company {
  width: 50%;
  padding: 24px;
  border-top: 1px solid #bfbfbf;
  border-left: 1px solid #bfbfbf;
  transition: 300ms all;
}

.company:hover {
  background-color: #f8f9fa;
  cursor: pointer;
}

.company:nth-child(2) {
  border-right: 1px solid #bfbfbf;
}
.company:nth-child(3) {
  border-bottom: 1px solid #bfbfbf;
}
.company:nth-child(4) {
  border-right: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
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

@media only screen and (max-width: 1250px) {
  .company {
    width: 100%;
  }
  .company:nth-child(1) {
    border-right: 1px solid #bfbfbf;
  }
  .company:nth-child(2) {
    border-right: 1px solid #bfbfbf;
  }
  .company:nth-child(3) {
    border-right: 1px solid #bfbfbf;
    border-bottom: none;
  }
  .company:nth-child(4) {
    border-right: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
  }
}
</style>
