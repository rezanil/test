<template>
    <div>
         <v-card
       color="gray"
    class="mx-auto margin"
    max-width="100%"
  >
    <v-card-text dark
      class="grey lighten-1 black--text">
      <p class="text-h4  black--text">
       {{getData[indexOfposts].title}}
      </p>
      
      <div class="black--text">
        {{getData[indexOfposts].body}}
      </div>
    </v-card-text>
    </v-card>








<v-card>
      <v-responsive class="green lighten-4" >
        <h1 class="grey--text margincm">comments</h1>
        <div v-for="item in filtercomments" :key="item.id">
         <v-card
    class="mx-auto margincm"
    color="green lighten-1"
    dark
    max-width="100%"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-comment
      </v-icon>
      <span class="text-h6 font-weight-light">{{item.email}}</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold">
     {{item.body}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt="re"
            
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-card-actions>
  </v-card>
      </div>
      </v-responsive>
    </v-card>

    </div>
</template>

<script>
export default {
    fetchOnServer: false,
    data() {
      return {
        indexOfposts:this.$route.params.slug-1
      }
    },
   async fetch({ store }) {
    return await Promise.all([
        store.dispatch('fetchData'),
        store.dispatch('fetchCom')
    ])
},
  

  computed: {
    getloading(){
return this.$store.getters.getloading
    },
    getCom() {
      return this.$store.getters.getCom
    },
     getData() {
      return this.$store.getters.getData
    },
    filtercomments(){
      return this.getCom.filter(comment=>(comment.postId===this.getData[this.indexOfposts].id))
    
  },
  methods:{
    
    }
  },
}
</script>


<style >
  .margin{
    margin-bottom: 200px;
  }
  .margincm{
    margin-bottom: 50px;
  }
</style>