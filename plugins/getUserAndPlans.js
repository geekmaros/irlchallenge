export default async ({ store }) => {
  await store.dispatch('events/getUserAndPlans')
}
