<template>
  <div id="app">
  <navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
}
</script>

<style></style>
