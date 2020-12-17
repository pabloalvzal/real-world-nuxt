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
import { mapState } from 'vuex'  // <--- To map events

import EventCard from '~/components/EventCard.vue'
import EventService from '@/services/EventService.ts'
import { StoreEventsState } from '~/types/types'

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
      otherRandomData: []
    }
  },
  /**
   * fetch() will fill the store before rendering the page!
   *
   * Attention:
   * Note that fetch() can receive a legacy Context object as first parameter, in which case the
   * properties in `this` will be undefined (eg. this.$store, this.$data)
   *
   */
  // async fetch() { // { store, error }: Context <- fetch() could take a legacy `Context` object  Nuxt < 2.12 (we are at 2.14), like asyncData(context).
  async fetch({ store, error }: Context) { // <- Works best, weird state handling without passing the Context object
  // async asyncData(context: Context) { <- repalced by fetch()
    try {
      // await this.$store.dispatch('events/fetchEvents') <- Was used when no Context object was passed.
      await store.dispatch('events/fetchEvents')
      // When using asyncData(context)...
      // const { data } = await EventService.getEvents();
      // return {
      //   events: data // <- notice that this becomes the component's data
      // }
      // Note how fetch() DOES NOT have a return statement that merges with component data.
    } catch (e) {
      // this.$nuxt.error({ statusCode: 503, message: 'Unable to fetch events at this time, please try again' });
      error({ statusCode: 503, message: 'Unable to fetch events at this time, please try again' });
      // context.error({ statusCode: 503, message: 'Unable to fetch events at this time, please try again' })
    }
  },
  /**
   * Defines the component data (eg. events), which gets from
   */
  computed: mapState({
    events: (state: any) => state.events.events,
  })
})
</script>