<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Context } from '@nuxt/types'
export default Vue.extend({
  name: 'Event',
  head() {
    return {
      title: 'Event #' + this.$data.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about Event #' + this.$data.event.title
        }
      ]
    }
  },
  data() {
    const event: any = {};
    return {
      event,
    }
  },
  // computed: {
  //   id() {
  //     // return this.$route.params.id
  //     return this.event.id
  //   }
  // },
  async asyncData(context: Context) {
    const { $axios, error, params } = context;
    try {
      const { data } = await $axios.get(
        'http://localhost:4000/events/' + params.id
      )
      return {
        event: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id
      })
    }
  }
})
</script>