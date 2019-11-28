<template>
  <section class="home">
    <div class="slider">
      <HomeSlider />
    </div>
    <Categories />
    <Trending />
    <NewProducts />
  </section>
</template>

<script>
import HomeSlider from "@/components/Home/HomeSlider";
import Categories from "@/components/Home/Categories";
import Trending from "@/components/Home/Trending";
import NewProducts from "@/components/Home/NewProducts";

export default {
  name: "home",
  components: {
    HomeSlider,
    Categories,
    Trending,
    NewProducts
  }
};
</script>
