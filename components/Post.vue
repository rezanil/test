<template>
  <div>
    <v-card color="gray" class="mx-auto" max-width="100%">
      <v-card-text dark class="grey lighten-1 black--text">
        <p class="text-h4 black--text">
          {{ item.title }}
        </p>

        <div class="black--text">
          {{ item.body }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="indigo lighten-3">
          <nuxt-link
            class="text-decoration-none"
            :to="{ name: 'comments-slug', params: { slug: item.id } }"
          >
            learn more
          </nuxt-link>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {item:{
      type:Object,
      required:true

  }},
}
</script>
