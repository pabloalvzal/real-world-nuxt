import EventService from '@/services/EventService.ts'
import
  // Vuex,
  { Store } from 'vuex'
import { StoreEventsState } from '~/types/types';

// const store = new Vuex.Store({})



/**
 * state value should always be a function to avoid unwanted shared state on the server side.
 */
export const state = (): StoreEventsState => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENTS(state: StoreEventsState, events: object[]) {
    state.events = events;
  },
  SET_EVENT(state: StoreEventsState, event: object) {
    state.event = event
  }
}

export const actions = {
  async fetchEvents({ commit } : Store<StoreEventsState>) {
    const response = await EventService.getEvents();
    commit('SET_EVENTS', response.data);
  },
  async fetchEvent({ commit } : Store<StoreEventsState>, id: string) {
    const response = await EventService.getEvent(id);
    commit('SET_EVENT', response.data);
  }
}