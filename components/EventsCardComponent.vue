<template>
  <main class="mx-auto lg:max-w-screen-lg pt-10 pb-10" v-if="events">
   <div class="card-container  grid grid-cols--1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
     <NuxtLink :to="`/${event.slug}/${event.key}`" class="shadow-lg hover:shadow-2xl rounded-lg transform transition-all duration-300 ahover:-translate-y-2 overflow-hidden"  v-for="(event, index) in events.userPlans.plans" :key="event.key">
       <div class="card-top-image overflow-hidden cursor-pointer">
         <div class="card-image bg-cover w-full object-cover bg-center h-44 p-4 hover:scale-50" :style="{backgroundImage: 'url('+ event.image + ')'}"></div>
       </div>
       <div class="card-body px-4 pb-5 pt-2 mt-1">
         <h2 class="card-heading text-base text-sm font-bold ">{{event.title}}</h2>

         <div class="time-date mt-3">
           <div class="date inline-flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="#454547" d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/></svg>
             <p class="text-xs ml-2 leading-5 font-semibold">{{getDate(event.start.utc).month +' '+getDate(event.start.utc).numberedDay +', '+getDate(event.start.utc).year  }}</p>
           </div>
         </div>
         <Attending :event="event"></Attending>
       </div>

     </NuxtLink>
   </div>



  </main>
</template>

<script>
import { mapState } from 'vuex'
import Attending from "~/components/Attending";
export default {
  name: "EventsCardComponent",
  components: { Attending },
  // apollo:{
  //   user: {
  //     prefetch: true,
  //     query: fetchUser,
  //     variables: {
  //       username: "irlideas"
  //     }
  //   }
  // },
  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
  },
  methods: {
    getDate(value){
      const formattedDate = new Date(value).toUTCString().split(' ')
      return{
        day: formattedDate[0],
        month: formattedDate[1],
        numberedDay: formattedDate[2],
        year: formattedDate[3],
        time: formattedDate[4]
      }
    },
  },
  mounted() {
    if(this.events){
      console.log(this.events)
    }
  }
};
</script>

<style lang="scss" scoped>
main{
  .card-top-image .card-image,
  .card-top-image .card-image,{
    transition: all .3s;
  }
  .card-top-image:hover .card-image,
  .card-top-image:focus .card-image,{
    transform: scale(1.1);
    transition: all .9s;
  }

}
</style>
