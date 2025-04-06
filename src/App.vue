<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showWhatsAppIcon: true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Overpass', sans-serif;
  color: #333;
}

#app {
  position: relative;
  min-height: 100vh;
}

.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}

.whatsapp-icon img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.btn-primary {
  background-color: #8c241d;
  border-color: #8c241d;
}

.btn-primary:hover {
  background-color: #761c18;
  border-color: #761c18;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
