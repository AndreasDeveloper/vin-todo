<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="dash-blocks">
        <DashBlock />
    </div>
  </div>
</template>

<script>
import DashBlock from '../components/Dashboard/DashBlock';

export default {
  name: 'Dashboard',
  metaInfo: {
      title: 'Dashboard | Vin',
      meta: [
      { name: 'description', content: 'Dashboard gives you freedom, creativity and most importantly security. Dive into it now.' },
      { name: 'author', content: 'Vin | AndreasDEV' },
      { name: "og:title", property: "og:title", content: "Dashboard | Vin" },
      { name: "og:type", property: "og:type", content: "website" },
      { name: "og:description", property: "og:description", content: "Dashboard gives you freedom, creativity and most importantly security. Dive into it now." },
    ]
  },
  components: {
      DashBlock
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/pages/_dashboard.scss';
</style>