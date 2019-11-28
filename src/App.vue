<template>
  <v-app>
    <Navbar />
    <ShoppingBag />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import ShoppingBag from "@/components/ShoppingBag";

export default {
  name: 'App',

  components: {
    Navbar,
    ShoppingBag
  },

  data: () => ({
    //
  }),
};
</script>
