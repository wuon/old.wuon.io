<template>
  <div class="py-5">
    <div class="container mt-3">
      <Header />
      <transition name="fade" appear>
        <main>
          <slot />
        </main>
      </transition>
    </div>
    <div class="container">
      <Footer />
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
    Header
  }
};
</script>

<style>

@font-face {
  font-family: Gilroy;
  src: url('../assets/Gilroy-ExtraBold.otf');
  font-weight: bold;
}

.fade-enter-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter {
  opacity: 0;
}

.font-weight-bold {
  font-family: Gilroy;
  font-weight: bold;
}

.display-5 {
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-6 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
}

</style>
