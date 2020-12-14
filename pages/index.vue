<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script lang='ts'>
import { Context } from '@nuxt/types'
import Vue from 'vue'
import EventCard from '~/components/EventCard.vue'
export default Vue.extend({
  components: {
    EventCard
  },
  head() {
    return {
      title: 'Event Listing'
    }
  },
  data() {
    return {
      events: []
    }
  },
  async asyncData(context: Context) {
    try {
      const response = await context.$axios.get('http://localhost:4000/events');
      return {
        events: response.data // <- notice that this becomes the component's data
      }
    } catch (e) {
      context.error({ statusCode: 503, message: 'Unable to fetch events at this time, please try again' })
    }
  }
})
</script>