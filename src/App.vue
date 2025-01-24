<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow pt-[120px]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
