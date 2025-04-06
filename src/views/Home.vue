<template>
  <div class="home-page">
    <!-- Hero Slider -->
    <div class="hero-slider">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="hero-slide">
              <div class="container">
                <div class="hero-content">
                  <h1>SPECIAL OFFER<br/>EID AL-FITR<br/>BIG SALE</h1>
                  <p>UP TO 60% OFF</p>
                  <router-link to="/collections/sale" class="btn btn-primary">SHOP NOW</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide">
              <div class="container">
                <div class="hero-content">
                  <h1>ELEGANT<br/>HANDBAGS<br/>COLLECTION</h1>
                  <p>DISCOVER THE LATEST DESIGNS</p>
                  <router-link to="/collections/new-arrival" class="btn btn-primary">SHOP NOW</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- Eid Al-Fitr Sale Limited Stock -->
    <section class="limited-stock section-padding">
      <div class="container">
        <h2 class="section-title">Eid Al-Fitr Sale Limited Stock Left</h2>
        <div class="product-grid">
          <div v-for="product in limitedStockProducts" :key="product.id" class="product-card">
            <product-card :product="product"></product-card>
          </div>
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="new-arrivals section-padding">
      <div class="container">
        <h2 class="section-title">Eid Al-Fitr New Arrival</h2>
        <div class="product-grid">
          <div v-for="product in newArrivalProducts" :key="product.id" class="product-card">
            <product-card :product="product"></product-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ProductCard from '@/components/product/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    ProductCard
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    ...mapGetters(['allProducts']),
    limitedStockProducts() {
      return this.allProducts
    },
    newArrivalProducts() {
      return this.allProducts.filter(product => product.new).slice(0, 8)
    }
  },
  created() {
    this.$store.dispatch('loadProducts')
  },
  mounted() {
    // Initialize swiper
    new Swiper('.swiper-container', this.swiperOptions)
  }
}
</script>

<style scoped>
.section-padding {
  padding: 60px 0;
}

/* Hero Slider Styles */
.hero-slider {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.hero-slide {
  height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 500px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.hero-content .btn {
  padding: 10px 20px;
  font-weight: 600;
}

/* Featured Deals Styles */
.featured-deals .row {
  margin: -10px;
}

.featured-deals .col-md-6 {
  padding: 10px;
}

.deal-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 300px;
}

.deal-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.deal-card:hover img {
  transform: scale(1.05);
}

.deal-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
}

.deal-content h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.btn-outline-primary {
  color: white;
  border-color: white;
  padding: 8px 20px;
  background-color: transparent;
}

.btn-outline-primary:hover {
  background-color: white;
  color: #8c241d;
}

/* Category Grid Styles */
.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category-card {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  height: 200px;
  background-color: #f5f5f5;
  transition: transform 0.3s;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-image {
  height: 150px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.category-card:hover .category-image img {
  transform: scale(1.1);
}

.category-info {
  padding: 10px;
  text-align: center;
  background-color: white;
}

.category-info h3 {
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

.category-info span {
  font-size: 0.875rem;
  color: #666;
}

/* Product Grid Styles */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Media Queries */
@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .category-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-slide {
    height: 400px;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .hero-slide {
    height: 350px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .deal-card {
    height: 250px;
  }

  .product-grid,
  .category-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>
