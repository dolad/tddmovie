<template>
  <div>
     <button @click="increase">Increase</button>
     <p>You clicked {{clicks}} times</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clicks: 0
    }
  },

  methods: {
    increase () {
      this.clicks += 1
    }
  }

}
</script>
