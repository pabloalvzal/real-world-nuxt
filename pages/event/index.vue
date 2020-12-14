<template>
  <div>
    <h1>This is an example of how we can load a page in path {{ id }}</h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'path: http://localhost:3000/event'
    }
  },
  computed: {
    id() {
      return this.$route.fullPath
    }
  },
}
</script>