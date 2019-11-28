<template>
  <section class="products trending">
    <v-container>
      <h2 class="text-center">Trending</h2>
      <v-row>
        <v-col
          v-for="trend in trending"
          :key="trend.id"
          cols="12"
          sm="6" md="4" lg="3"
        >
          <v-card
            flat
            class="text-center pb-4"
            height="500px"
            dark
            v-if="trend.type === 'trend'"
          >
            <v-img
              class="align-end"
              height="70%"
              :src="trend.images.first.image"
            ></v-img>

            <div
              class="cate"
            >
              {{ trend.type }}
            </div>

            <div class="active-icons">
              <v-icon>mdi-eye</v-icon>
              <v-icon>mdi-heart</v-icon>
            </div>

            <div class="details">
              <p class="item-title">{{ trend.title }}</p>
              <v-card-subtitle class="brand">{{ trend.brand }}</v-card-subtitle>
              <p class="price">${{trend.price}}</p>

              <div class="images">
                <div class="first">
                  <img :class="{'active': trend.images.first.active}" :src="trend.images.first.image" alt="">
                </div>
                <div class="two">
                  <img :class="{'active': trend.images.second.active}" :src="trend.images.second.image" alt="">
                </div>
              </div>

              <v-btn
                dark
                text
                class="main-btn"
                @click="addToItems(trend)"
              >
                <v-icon
                  left
                >mdi-shopify</v-icon>
                Add to bag
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'trending',
  methods: {
    addToItems(product) {
      let items = this.$store.state.items,
          products = this.$store.state.products;
      for (let i = 0; i < products.length; i++) {
        if(products[i].id === product.id) {
          items.push(product);
          this.$store.state.drawer = true;
        }
      }
      this.addPrice(product);
    },

    addPrice(product) {
      this.$store.state.total += product.price;
    }
  },

  computed: {
    trending() {
      return this.$store.getters.trending;
    }
  },
}
</script>
