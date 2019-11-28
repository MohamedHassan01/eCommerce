<template>
  <nav>
    <v-toolbar
      flat
      class="px-3"
      dark
    >
      <v-toolbar-title>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </v-toolbar-title>

      <v-toolbar-items class="ml-5">
        <v-btn
          text
          class="d-none d-md-flex"
          v-for="link in links"
          :key="link.name"
          router
          :to="link.route"
        >
          <span>{{ link.name }}</span>
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="icons">
        <div :class="{'search-box': searchBox}">
          <input class="search" type="text">
        </div>
        <v-btn
          text
          small
          :class="{'search-box': searchBox}"
          @click="searchBox = !searchBox"
        >
          <v-icon
            class="btn-search"
            color="grey"
          >
            mdi-search-web
          </v-icon>
        </v-btn>

        <v-btn
          text
          small
          class="btn-bag"
          @click="toggleDrawer()"
        >
          <v-icon color="grey">mdi-shopify</v-icon>
          <span
            class="items"
            v-if="itemsCount > 0"
          >
            {{ itemsCount }}
          </span>
        </v-btn>

        <v-btn
          text
          small
        >
          <v-icon color="grey">mdi-face-profile</v-icon>
        </v-btn>

        <v-btn
          text
          small
        >
          <v-icon color="grey">mdi-settings</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      searchBox: false
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer');
    }
  },
  computed: {
    links() {
      return this.$store.state.links;
    },
    itemsCount() {
      return this.$store.state.items.length;
    }
  },
}
</script>