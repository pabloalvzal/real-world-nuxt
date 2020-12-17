
import { NuxtAxiosInstance } from '@nuxtjs/axios'

// declare module 'vue/types/vue' {
//   interface Vue {
//     $axios: NuxtAxiosInstance;
//   }
// }

export interface StoreEventsState {
  events: object[];
  event: object;
}

declare module '@nuxt/types' {
  // nuxt's context.app.$ga inside asyncData, fetch, plugins, middleware, nuxtServerInit
  // interface NuxtAppOptions {
  //   $performAction: (action: any, anchor?: HTMLElement) => void;
  // }
  // nuxt's context.$axios
  interface Context {
    $axios: NuxtAxiosInstance;
  }
}
