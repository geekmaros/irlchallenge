<template>
  <div class="container flex flex-col">
    <EventsCardComponent v-if="events"></EventsCardComponent>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventsCardComponent from "~/components/EventsCardComponent";
// import gql from 'graphql-tag'
// import fetchUser from "~/apollo-api/queries/fetchUserAndUserPlan.gql"
export default {
  name: "_username",
  async asyncData({ store,params }) {
    await  store.dispatch('events/getUserAndPlans', {username: params.username })
  },
  components: { EventsCardComponent },
  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
