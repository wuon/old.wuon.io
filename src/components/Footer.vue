<template>
  <div class="py-5 row footer">
    <div class="col-md-2 col-6">
      <p class="font-weight-bold">
        DIRECTORY
      </p>
      <ul class="list-unstyled font-big-1-2 font-weight-light">
        <li>
          <g-link to="/">Home</g-link>
        </li>
        <li>
          <g-link to="/blog">Blog</g-link>
        </li>
        <li>
          <g-link to="/">Projects</g-link>
        </li>
        <li>
          <g-link to="/">Photography</g-link>
        </li>
        <li>
          <g-link to="/">Contact</g-link>
        </li>
      </ul>
    </div>
    <div class="col-md-2 col-6">
      <p class="font-weight-bold">
        DEVELOPMENT
      </p>
      <ul class="list-unstyled font-big-1-2 font-weight-light">
        <li>
          <a href="https://github.com/Wuon" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://leetcode.com/0x77756f6e/" target="_blank">Leetcode</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~wuon" target="_blank">npm</a>
        </li>
      </ul>
    </div>
    <div class="col-md-2 col-6">
      <p class="font-weight-bold">
        SOCIAL
      </p>
      <ul class="list-unstyled font-big-1-2 font-weight-light">
        <li>
          <a href="https://www.linkedin.com/in/danielktwu/" target="_blank">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/danielktwu/" target="_blank">Instagram</a>
        </li>
      </ul>
    </div>
    <div class="col-md-4 offset-md-2 col-12 mt-3 mt-md-0">
      <div class="form-group">
        <label class="font-weight-bold">GENERAL ENQUIRIES</label>
        <h4 class="font-weight-light">
          <a href="mailto:wuon@protonmail.com">wuon@protonmail.com</a>
        </h4>
      </div>
    </div>
    <div class="container pt-5 text-muted small">
      With love and passion,
      <div>wuon</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>

a {
  color: #808080;
}

a:hover {
  color: #000000;
  text-decoration: none;
}

</style>
