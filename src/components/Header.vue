<template>
  <div>
    <v-app-bar
      app
      color="primary"
      
    >
      <div class="d-flex align-center white--text">
        <h2>PINAMIK TECHNOLOGY</h2>        
      </div>

      <v-spacer></v-spacer>

      <v-text-field
      color="white"
      v-if="showHide"
      label="search"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-list class="d-flex align-center text-capitalize " color="primary">
          <v-list-item>
            <v-list-item-title class="white--text home" @click="goHome">home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="white--text gallery" @click="goGallery">Gallery</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="white--text about" @click="goAbout">about us</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="white--text contact" @click="goContact">contact us</v-list-item-title>
          </v-list-item>

          <v-btn @click="onSearch" text color="white">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
      </v-list>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",

  data: () => ({
    showHide:false
  }),

  methods:{
    onSearch(){
      this.showHide = true
    },
    goHome(){
        alert('you clicked me')
    },
    goGallery(){
        alert('you clicked me')
    },
    goAbout(){
        alert('you clicked me')
    },
    goContact(){
        alert('you clicked me')
    }
  }

};
</script>

<style scoped>
.home, .gallery, .about, .contact{
    cursor: pointer;
}
</style>