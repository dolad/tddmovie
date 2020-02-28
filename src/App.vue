<template>
  <div id="app">
    <search-component @search='changeMovieResult'></search-component>
    <counter/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SearchComponent from './components/SearchComponent'
import Counter from './Counter'

export default {
  name: 'app',
  components: {
    SearchComponent,
    Counter
  },
  data () {
    return {
      movies: []
    }
  },

  methods: {
    changeMovieResult (result) {
      this.movies = result
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
