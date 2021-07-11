<template>
    <v-card
            class="mx-auto margincm"
            color="green lighten-1"
            dark
            max-width="100%"
          >
            <v-card-title>
              <v-icon large left> mdi-comment </v-icon>
              <span class="text-h6 font-weight-light">{{ item.email }}</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              {{ item.body }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" alt="re"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
</template>


<script>
export default {
    props:{
        item:{
      type:Object,
      required:true

  }
    }
}
</script>