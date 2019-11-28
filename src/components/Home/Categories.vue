<template>
  <section class="categories">
    <v-container>
      <div class="categories-grid">

        <v-card
          v-for="cate in cates"
          :key="cate.id"
          :class="cate.id"
          router
          :to="cate.router"
        >
          <v-img
            class="align-start"
            height="100%"
            :src="cate.image"
          >
          </v-img>
          <v-btn
            dark
            class="main-btn"
            large
            text
          >{{ cate.text }}</v-btn>
        </v-card>

      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'categories',
  computed: {
    cates() {
      return this.$store.state.cates;
    }
  }
}
</script>
