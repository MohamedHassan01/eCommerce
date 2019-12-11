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
        <ul class="menu">
          <li
            class="link"
            v-for="link in links"
            :key="link.name"
          >
            <span
              @mouseenter="link.name !== 'Home' ? link.dropMenu.active = true : link.dropMenu.active = false"
              @mouseleave="link.dropMenu.active = false"
            >
              <router-link :to="link.route">{{link.name}}</router-link>
            </span>

            <ul
              :class="[{active: link.dropMenu.active}, 'drop-menu']"
              @mouseenter="link.dropMenu.active = true"
              @mouseleave="link.dropMenu.active = false"
            >
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="2"
                  >
                    <div class="box">
                      <h3 class="title">{{ link.dropMenu.firstElement.title }}</h3>
                      <ul class="products">
                        <li v-for="(item, index) in link.dropMenu.firstElement.items" :key="index">
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-col>

                  <v-col
                    cols="12"
                    md="2"
                  >
                    <div class="box">
                      <h3 class="title">{{ link.dropMenu.secondElement.title }}</h3>
                      <ul class="products">
                        <li v-for="(item, index) in link.dropMenu.secondElement.items" :key="index">
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-col>

                  <v-col
                    cols="12"
                    md="2"
                  >
                    <div class="box">
                      <h3 class="title">{{ link.dropMenu.thirdElement.title }}</h3>
                      <ul class="products">
                        <li v-for="(item, index) in link.dropMenu.thirdElement.items" :key="index">
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-col>

                  <v-col
                    cols="12"
                    md="3"
                  >
                    <img :src="link.dropMenu.img" alt="">
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                  >
                    <img :src="link.dropMenu.img" alt="">
                  </v-col>
                </v-row>
              </v-container>
            </ul>
          </li>
        </ul>
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
      searchBox: false,
      links: [
        {
          name: "Home",
          route: "/",
          dropMenu: {
            active: false,
            firstElement: {
              title: "",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            secondElement: {
              title: "",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            thirdElement: {
              title: "",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            img: require('@/assets/slider/men.jpg')
          }
        },
        {
          name: "Shop",
          route: "/shop",
          dropMenu: {
            active: false,
            firstElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            secondElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            thirdElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            img: require('@/assets/slider/kid.jpg')
          }
        },
        {
          name: "Men",
          route: "/men",
          dropMenu: {
            active: false,
            firstElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            secondElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            thirdElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            img: require('@/assets/slider/men.jpg')
          }
        },
        {
          name: "Women",
          route: "/women",
          dropMenu: {
            active: false,
            firstElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            secondElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            thirdElement: {
              title: "Shirts",
              items: ['Product Item 1', 'Product Item 2', 'Product Item 3', 'Product Item 4', 'Product Item 5',]
            },
            img: require('@/assets/slider/women.jpg')
          }
        }
      ]
    }
  },

  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer');
    }
  },

  computed: {
    itemsCount() {
      return this.$store.state.items.length;
    }
  },
}
</script>