<template>
  <div>
    <v-card color="gray" class="mx-auto margin" max-width="100%">
      <v-card-text dark class="grey lighten-1 black--text">
        <p class="text-h4 black--text">
          {{ getData[indexOfposts].title }}
        </p>

        <div class="black--text">
          {{ getData[indexOfposts].body }}
        </div>
      </v-card-text>
    </v-card>

    <v-card>
      <v-responsive class="green lighten-4">
        <h1 class="grey--text margincm">comments</h1>
        <div v-for="item in filtercomments()" :key="item.id">
         <Comments :item="item" />
        </div>
      </v-responsive>
    </v-card>
  </div>
</template>

<script>
import Comments from '../../../components/Comments.vue'
export default {
  components: { Comments },
  fetchOnServer: false,
  data() {
    return {
      indexOfposts: this.$route.params.slug - 1,
    }
  },
  async fetch({ store }) {
    return await Promise.all([
      store.dispatch('fetchData'),
      store.dispatch('fetchCom'),
    ])
  },

  computed: {
    getloading() {
      return this.$store.getters.getloading
    },
    getCom() {
      return this.$store.getters.getCom
    },
    getData() {
      return this.$store.getters.getData
    },
    
    methods: {
      filtercomments() {
      return this.getCom.filter(
        (comment) => comment.postId === this.getData[this.indexOfposts].id
      )
    },
    },
  },
}
</script>

<style>
.margin {
  margin-bottom: 200px;
}
.margincm {
  margin-bottom: 50px;
}
</style>
