import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      { name: "Home", route: "/" },
      { name: "Shop", route: "/shop" },
      { name: "Men", route: "/men" },
      { name: "Women", route: "/women" }
    ],

    slides: [
      {
        index: "0",
        name: "Men",
        content: {
          heading: "New Offers To Men",
          text: "Shirts, Shots, Shoes and Trousers "
        }
      },
      {
        index: "1",
        name: "Womens",
        content: {
          heading: "New Offers To Womens",
          text: "Shirts, Shots, Shoes and Trousers "
        }
      },
      {
        index: "2",
        name: "Kid",
        content: {
          heading: "New Offers To Kids",
          text: "Shirts, Shots, Shoes and Trousers "
        }
      }
    ],

    drawer: false,

    items: [],

    total: 0,

    cates: [
      {
        id: "one",
        image: require("@/assets/cate/shirts.webp"),
        text: "Shirts",
        router: "/shirts"
      },
      {
        id: "two",
        image: require("@/assets/cate/sport.webp"),
        text: "Sports",
        router: "/sport"
      },
      {
        id: "three",
        image: require("@/assets/cate/women.jpg"),
        text: "Women",
        router: "/women"
      },
      {
        id: "four",
        image: require("@/assets/cate/watch.jpg"),
        text: "Watches",
        router: "/watch"
      },
      {
        id: "five",
        image: require("@/assets/cate/men.png"),
        text: "Men",
        router: "/men"
      },
      {
        id: "six",
        image: require("@/assets/cate/kids.png"),
        text: "Kids",
        router: "/kids"
      }
    ],

    products: [
      {
        id: 1,
        trend: true,
        new: false,
        brand: "ZARA",
        title: "Sport Suit Hoodie Batman 1",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 2,
        trend: true,
        new: false,
        brand: "ZARA",
        title: "East Hampton Fleece 2",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/hunting-sweatshirt-orange.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/hunting-sweatshirt-orange.png"),
            active: false
          }
        }
      },
      {
        id: 3,
        trend: true,
        new: false,
        brand: "ZARA",
        title: "East Hampton Fleece 3",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 4,
        trend: true,
        new: false,
        brand: "ZARA",
        title: "East Hampton Fleece 4",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 5,
        trend: true,
        new: false,
        brand: "ZARA",
        title: "East Hampton Fleece 5",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 6,
        trend: true,
        new: false,
        brand: "ZARA",
        title: "East Hampton Fleece 6",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 7,
        trend: true,
        new: false,
        brand: "ZARA",
        title: "East Hampton Fleece 7",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 8,
        trend: true,
        new: false,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 9,
        trend: false,
        new: true,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 10,
        trend: false,
        new: true,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 11,
        trend: false,
        new: true,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 12,
        trend: false,
        new: true,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 13,
        trend: false,
        new: true,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 14,
        trend: false,
        new: true,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 15,
        trend: false,
        new: true,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      },
      {
        id: 16,
        trend: false,
        new: true,
        brand: "ZARA",
        title: "East Hampton Fleece 8",
        price: 199,
        images: {
          first: {
            image: require("@/assets/trending/Sport-Suit-black.png"),
            active: true
          },
          second: {
            image: require("@/assets/trending/Sport-Suit-red.png"),
            active: false
          }
        }
      }
    ]
  },

  getters: {
    trending(state) {
      return state.products.filter(e => e.trend);
    },
    newProducts(state) {
      return state.products.filter(e => e.new);
    }
  },

  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    }
  },

  actions: {},
  modules: {}
});
