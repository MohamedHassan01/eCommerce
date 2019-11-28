<template>
  <div class="bag">
    <v-navigation-drawer
      temporary
      right
      fixed
      v-model="drawer"
      dark
    >
      <h4 class="my-4 text-center font-weight-light">Shopping Bag</h4>

      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
        >
          <v-card
            color="white"
          >
            <div class="cart-content">
              <v-avatar
                class="mx-3"
                size="90"
                tile
              >
                <v-img :src="item.images.first.active ? item.images.first.image : item.images.second.image"></v-img>
              </v-avatar>

              <div class="details black--text">
                <h4 class="title">{{ item.title }}</h4>
                <div class="price grey--text">1X <span>{{ item.price }}</span></div>
              </div>

              <v-btn
                color="grey"
                class="mt-9 mr-1"
                small
                text
                @click="deleteItem(item)"
              >
                <v-icon>mdi-delete-empty</v-icon>
              </v-btn>

            </div>
          </v-card>
        </v-col>

        <v-divider></v-divider>

        <div class="cart-footer">
          <v-col cols="12">
            <div class="total px-3">
              Total <span>${{ total }}</span>
            </div>
          </v-col>

          <v-container>
            <div class="row">
              <v-col cols="12" sm="6">
                <v-btn
                  class="ml-2"
                  :disabled="items.length <= 0"
                  @click="clearBag"
                >Clear All</v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn
                  text
                  class="main-btn"
                >Checkout</v-btn>
              </v-col>
            </div>
          </v-container>
        </div>
      </v-row>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'shopping-bag',
  methods: {
    deleteItem(product) {
      let items = this.$store.state.items;
      items.splice(items.indexOf(product), 1);
      this.subPrice(product);
    },

    subPrice(product) {
      this.$store.state.total -= product.price;
    },

    clearBag() {
      this.$store.state.items = [];
      this.$store.state.total = 0;
      this.$store.state.drawer = false;
    }
  },

  computed: {
    drawer: {
      get: function() {
        return this.$store.state.drawer;
      },
      set: function(value) {
        this.value = value;
      }
    },

    items() {
      return this.$store.state.items;
    },

    total() {
      return this.$store.state.total;
    }
  },
}
</script>
