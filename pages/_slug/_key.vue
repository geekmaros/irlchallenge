<template>
  <main class="mx-auto lg:max-w-screen-lg pt-10 pb-10 bg-gray-400">
    Testing page enter {{ $route.params.key }}

  </main>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'key',
  apollo: {
    userPlans:{
      query: gql `
        query getUserAndPlans($username: String!) {
        user: publicUser(username: $username) {
          username
          fullName
          bio
          image
          isPublic
          isVerified
          followersCount
          followingCount
        }
        userPlans: publicUserPlan(username: $username) {
          plans() {
            key
            slug
            title
            image
            link
            start {
              utc
            }
            end {
              utc
            }
            location {
              name
              address
              city
              state
              coordinates {
                latitude
                longitude
              }
            }
            attendingOrInterested {
              username
              fullName
              image
            }
            attendingOrInterestedCount
          }
        }
      }

      `,
      variables() {
        return{
          username: 'irlideas',
          key: this.$route.params.key
        }
      }
    }
  },
}
</script>

<style scoped></style>
