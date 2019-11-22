<template>
  <Layout>
    <div class="d-flex flex-column justify-content-end">
      <div class="row">
        <div class="col-md-6">
          <h1 class="display-4 font-weight-bold">Looking to collaborate?</h1>
          <p class="font-big-1">I will respond within two business days!</p>
        </div>
        <div class="col-md-5 offset-md-1 align-center">
          <div class="form-group">
            <label class="label font-weight-bold">Get in touch</label>
            <h4 class="font-weight-light">
              <p class="font-big-1">
                <a href="mailto:wuon@protonmail.com" class="email font-weight-bold">
                  <u>wuon@protonmail.com</u>
                  <font-awesome icon="long-arrow-alt-right" class="arrow" />
                </a>
              </p>
            </h4>
            <h1 class="font-weight-light icons">
              <span class="mr-2">
                <a href="https://github.com/Wuon" class="icon" target="_blank">
                  <font-awesome :icon="['fab', 'github-alt']" />
                </a>
              </span>
              <span class="mr-2">
                <a href="https://www.linkedin.com/in/danielktwu/" class="icon" target="_blank">
                  <font-awesome :icon="['fab', 'linkedin-in']" />
                </a>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  components: { VueTyper },
  metaInfo: {
    title: "Contact!"
  }
};
</script>

<style>
u {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: #00aced;
}

.icon:hover {
  color: #000000;
}

.home-links a {
  margin-right: 1rem;
}

.icons {
  font-size: 24px;
}

.label {
  font-size: 14px;
}

.align-center {
  display: flex;
  align-items: center;
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
</style>
