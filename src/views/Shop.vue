<template>
  <section class="products shop">
    <v-container>
      <h2 class="text-center">Shop</h2>
      <v-row>
        <v-col
          v-for="one in allProducts"
          :key="one.id"
          cols="12"
          sm="6" md="4" lg="3"
        >
          <v-card
            flat
            class="text-center pb-4"
            height="500px"
            dark
          >
            <v-img
              class="align-end"
              height="70%"
              :src="one.images.first.image"
            ></v-img>

            <div class="active-icons">
              <v-icon>mdi-eye</v-icon>
              <v-icon>mdi-heart</v-icon>
            </div>

            <div class="details">
              <p class="item-title">{{ one.title }}</p>
              <v-card-subtitle class="brand">{{ one.brand }}</v-card-subtitle>
              <p class="price">${{ one.price }}</p>

              <div class="images">
                <div class="first">
                  <img :class="{'active': one.images.first.active}" :src="one.images.first.image" alt="">
                </div>
                <div class="two">
                  <img :class="{'active': one.images.second.active}" :src="one.images.second.image" alt="">
                </div>
              </div>

              <v-btn
                dark
                text
                class="main-btn"
                @click="addToItems(one)"
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
  name: 'shop',
  methods: {
    addToItems(product) {
      let items = this.$store.state.items,
          products = this.$store.state.products;
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === product.id) {
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
    allProducts() {
      return this.$store.state.products;
    }
  },
}
</script>