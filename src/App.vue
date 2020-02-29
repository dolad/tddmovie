<template>
  <div id="app">
    <search-component @search='changeMovieResult'></search-component>
    <movie-list :movies="movies"></movie-list>
    <!-- <counter/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SearchComponent from './components/SearchComponent'
import MovieList from './components/MovieList'

// import Counter from './Counter'

/* eslint-disable */
export default {
  name: 'app',
  components: {
    SearchComponent,
    // Counter,
    MovieList
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
:root {
  --blue-darkest: #131C25;
  --blue-light: #169CFC;
  --white: #E3E4E5;
  --grey-light: #919191;
  --yellow: #E3B044;
}
html {
  font-size: 62.5%;
}

body {
  font-family: 'Lato';
  font-weight: 400;
}
</style>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  padding: 2rem 4rem;
  background-color: var(--blue-darkest);

  @media screen and (max-width: 600px) {
  padding: 1rem 2rem;
}
}
</style>
