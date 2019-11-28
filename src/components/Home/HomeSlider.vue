<template>
  <div>
    <carousel
      :per-page="1"
      :mouse-drag="false"
      :autoplay="true"
      :loop="true"
      :autoplayHoverPause="false"
      :autoplayTimeout="5000"
    >
      <slide
        v-for="slide in slides"
        :key="slide.index"
        :data-index="slide.index"
        data-name="slide.name"
        class="text-center slide"
      >
        <div class="layer"></div>
        <h2 class="display-3 font-weight-bold">{{ slide.content.heading }}</h2>
        <p>{{ slide.content.text }}</p>
        <v-btn
          large
          dark
          text
          class="main-btn"
        >Shop now</v-btn>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "home-slider",
  computed: {
    slides() {
      return this.$store.state.slides;
    }
  },
};
</script>
