<template>
    <div>
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
     
     <nuxt-link to="/">
        <NuxtLogo />
     </nuxt-link>
      
    </v-app-bar>
    </div>
</template>