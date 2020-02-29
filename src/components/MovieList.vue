<template>
  <div>
      <ul>
         <movie-list-item v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
    </ul>
  </div>
</template>

<script>
import MovieListItem from './MovieListItem'
export default {
  name:'MovieList',
  components:{
    MovieListItem
  },
  props: {
    movies:{
      type:Array,
      required:true
    }

  }
}
</script>
