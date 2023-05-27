<template>
  <v-app>
    <HeaderVue />

    <v-main>
     <!-- <HeroComp /> -->
     <student-data-table />
     <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderVue from './components/Header.vue'
import studentDataTable from './components/student-data-table.vue';
// import HeroComp from './components/HeroComp.vue'

export default {
  name: 'App',

  components: {
    HeaderVue,
    // HeroComp
    studentDataTable
  },

  
};
</script>
