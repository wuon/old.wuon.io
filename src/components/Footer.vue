<template>
  <div class="py-5 row footer">
    <div class="col-md-2 col-6">
      <p>
        <b>DIRECTORY</b>
      </p>
      <ul class="list-unstyled font-big-1-2 font-weight-light">
        <li>
          <g-link to="/">Home</g-link>
        </li>
        <li>
          <g-link to="/blog">Blog</g-link>
        </li>
        <li>
          <g-link to="/projects">Projects</g-link>
        </li>
        <li>
          <g-link to="/photography">Photography</g-link>
        </li>
        <li>
          <g-link to="/contact">Contact</g-link>
        </li>
      </ul>
    </div>
    <div class="col-md-2 col-6">
      <p>
        <b>SOCIAL</b>
      </p>
      <ul class="list-unstyled font-big-1-2 font-weight-light">
        <li>
          <a href="https://github.com/Wuon">Github</a>
        </li>
        <li>
          <a href="https://leetcode.com/0x77756f6e/">Leetcode</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~wuon">npm</a>
        </li>
      </ul>
    </div>
    <div class="col-md-6 offset-md-2 col-12 mt-3 mt-md-0">
      <div class="form-group">
        <label class="font-weight-bold">GENERAL ENQUIRIES</label>
        <h4 class="font-weight-light">
          <a href="mailto:0x77756f6e@gmail.com">0x77756f6e@gmail.com</a>
        </h4>
      </div>
    </div>
    <div class="container pt-5 text-muted small">
      With love and passion,
      <div>0x77756f6e</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background-image: url('../assets/surburb.svg');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 250px;
}

a {
  color: #808080;
}

a:hover {
  color: #000000;
  text-decoration: none;
}

@media screen and (max-width: 500px) {
  .footer {
    background-image: none;
  }
}
</style>
