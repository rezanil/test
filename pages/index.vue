<template>
  <v-container>
    
    <v-row justify="center" align="center" class="row1">
      <v-text-field  v-model="input" label="search"  placeholder="Search for posts">
        <template #append>
         
            <v-icon>mdi-magnify</v-icon>
         
        </template>
      </v-text-field>

      <v-spacer />

      <v-select v-model="select" :items='selectarray' label="Filter"></v-select>
      
    </v-row>

<div  v-if="getloading" class="d-flex justify-space-around mb-6">
    
     <v-progress-circular

        class="d-flex justify-space-around mb-6"
      :size="70"
      :width="7"
      color="green"
      indeterminate
    ></v-progress-circular>
  
</div>

     <div v-else-if="finallselect.length===1">
        <div  v-for="item in finallselect" :key="item.id" class="d1">
       <v-card
       color="gray"
    class="mx-auto"
    max-width="100%"
  >
    <v-card-text dark
      class="grey lighten-1 black--text">
      <p class="text-h4  black--text">
        {{item.title}}
      </p>
      
      <div class="black--text">
        {{item.body}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="indigo lighten-3" 
      >
        
         <nuxt-link class="text-decoration-none" :to="{name:'comments-slug' , params:{slug:item.id}}">
           learn more
         </nuxt-link>
        
      </v-btn>
    </v-card-actions>
    </v-card>
      </div>
     </div>











     <div v-else>
        <div  v-for="item in searchbar" :key="item.id" class="d1">
       <v-card
       color="gray"
    class="mx-auto"
    max-width="100%"
  >
    <v-card-text dark
      class="grey lighten-1 black--text">
      <p class="text-h4  black--text">
        {{item.title}}
      </p>
      
      <div class="black--text">
        {{item.body}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="indigo lighten-3" 
      >
        
         <nuxt-link class="text-decoration-none" :to="{name:'comments-slug' , params:{slug:item.id}}">
           learn more
         </nuxt-link>
        
      </v-btn>
    </v-card-actions>
    </v-card>
      </div>
     </div>






  </v-container>
</template>

<script>
export default {
  fetchOnServer: false,
  data() {
    return {
      items: 'none',
       input:'',
       select:"defult"
       
    }
  },
  fetch() {
    return this.$store.dispatch('fetchData')
  },
  

  computed: {
    getloading(){
return this.$store.getters.getloading
    },
    getData() {
      return this.$store.getters.getData
    },
    searchbar(){
      return this.getData.filter(post=>(post.title.includes(this.input)))
    },
    selectarray(){
      return this.getData.map(post=>post.id).reverse().concat(this.items).reverse()
    },
    finallselect(){
      return this.getData.filter(post=>(post.id===(this.select)))
    }
   
   
  },
 
  

}
</script>

<style>
.d1{
  margin-top: 20px;
}
.row1{
  margin-bottom: 100px;
}
.v-progress-circular {
  margin: 1rem;
}

</style>
