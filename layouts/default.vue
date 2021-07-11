<template>
  <v-app dark>
    <v-app-bar
      
      app
      
    >
      <v-btn
      class="mx-2"
      fab
      dark
      small
      color="purple"
    >
      <v-icon dark>
        mdi-instagram
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      small
      color="success"
    >
      <v-icon dark>
        mdi-whatsapp
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      small
      color="blue"
    >
      <v-icon dark>
        mdi-twitter
      </v-icon>
    </v-btn>
      <v-spacer />
     
       <NuxtLogo />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
    
    class="item-center"
      
      app
    >
      <span class="grey--text text-center footer">Copyright</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style >
  .footer{
    margin: 0px auto;}
</style>