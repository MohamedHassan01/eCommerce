<template>
  <section class="products new-products">
    <v-container>
      <h2 class="text-center">New Products</h2>
      <v-row>
        <v-col
          v-for="newProduct in newProducts"
          :key="newProduct.id"
          cols="12"
          sm="6" md="4" lg="3"
        >
          <v-card
            flat
            class="text-center pb-4"
            height="500px"
            dark
            v-if="newProduct.type === 'new'"
          >
            <v-img
              class="align-end"
              height="70%"
              :src="newProduct.images.first.image"
            ></v-img>

            <div
              class="cate"
            >
              {{ newProduct.type }}
            </div>

            <div class="active-icons">
              <v-icon>mdi-eye</v-icon>
              <v-icon>mdi-heart</v-icon>
            </div>

            <div class="details">
              <p class="item-title">{{ newProduct.title }}</p>
              <v-card-subtitle class="brand">{{ newProduct.brand }}</v-card-subtitle>
              <p class="price">${{newProduct.price}}</p>

              <div class="images">
                <div class="first">
                  <img :class="{'active': newProduct.images.first.active}" :src="newProduct.images.first.image" alt="">
                </div>
                <div class="two">
                  <img :class="{'active': newProduct.images.second.active}" :src="newProduct.images.second.image" alt="">
                </div>
              </div>

              <v-btn
                dark
                text
                class="main-btn"
                @click="addToItems(newProduct)"
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
  name: 'newProducts',
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
    newProducts() {
      return this.$store.getters.newProducts;
    }
  },
}
</script>