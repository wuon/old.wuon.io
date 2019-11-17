<template>
  <div>
    <div class="m-h-10 d-flex flex-column justify-content-between my-5 font-big-1-2">
      <div class="d-flex flex-row justify-content-between">
        <ul class="list-unstyled font-weight-bold">
          <li>
            <g-link to="/" exact>HOME</g-link>
          </li>
          <li>
            <g-link to="/">ABOUT</g-link>
          </li>
          <li>
            <g-link to="/">PORTFOLIO</g-link>
          </li>
          <li>
            <g-link to="/">BLOG</g-link>
          </li>
          <li>
            <g-link to="/">CONTACT</g-link>
          </li>
        </ul>
        <div class="d-flex flex-column justify-content-end">
          <img src="../assets/logo_dark.svg" width="200" />
        </div>
      </div>
      <div>
        <div class="w-3 border-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.m-h-10 {
  min-height: 10rem;
}

.border-bottom {
  height: 4px;
  background-color: #000000;
}

a {
  color: #808080;
}

a:hover {
  color: #000000;
  text-decoration: none;
}

.active{
  color: #000000;
}

</style>
