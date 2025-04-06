<template>
  <div class="product-detail-page">
    <div class="container">
      <!-- Breadcrumb -->
      <div class="breadcrumb-wrapper">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link :to="`/collections/${product?.category?.toLowerCase()}`">{{ product?.category }}</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ product?.name }}</li>
          </ol>
        </nav>
      </div>

      <div v-if="loading" class="loading-container">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <template v-else-if="product">
        <!-- Product Details -->
        <div class="product-detail">
          <div class="row">
            <!-- Product Images -->
            <div class="col-lg-6">
              <div class="product-images">
                <!-- Main Image -->
                <div class="main-image">
                  <img :src="currentImage" :alt="product.name" class="img-fluid">
                  <div v-if="product.discount > 0" class="discount-badge">-{{ product.discount }}%</div>
                </div>

                <!-- Thumbnail Images -->
                <div class="thumbnail-images">
                  <div
                    v-for="(image, index) in product.images"
                    :key="index"
                    class="thumbnail"
                    :class="{ active: currentImage === image }"
                    @click="currentImage = image"
                  >
                    <img :src="image" :alt="`${product.name} - Thumbnail ${index + 1}`" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Information -->
            <div class="col-lg-6">
              <div class="product-info">
                <h1 class="product-title">{{ product.name }}</h1>

                <!-- Rating -->
                <div class="product-rating">
                  <div class="stars">
                    <i v-for="i in Math.floor(product.rating)" :key="i" class="fas fa-star"></i>
                    <i v-if="product.rating % 1 > 0" class="fas fa-star-half-alt"></i>
                    <i v-for="i in Math.floor(5 - product.rating)" :key="`empty-${i}`" class="far fa-star"></i>
                  </div>
                  <span>{{ product.reviews === 0 ? 'No reviews' : `${product.reviews} ${product.reviews === 1 ? 'review' : 'reviews'}` }}</span>
                </div>

                <!-- Price -->
                <div class="product-price">
                  <span v-if="product.discount > 0" class="regular-price">Rs.{{ formatPrice(product.price) }}</span>
                  <span class="sale-price">Rs.{{ formatPrice(product.salePrice || product.price) }}</span>
                  <span v-if="product.discount > 0" class="save-text">SAVE {{ product.discount }}%</span>
                </div>

                <!-- Stock Status -->
                <div class="stock-status">
                  <span v-if="product.stock > 0" class="in-stock">
                    <i class="fas fa-check-circle"></i> In Stock ({{ product.stock }} available)
                  </span>
                  <span v-else class="out-of-stock">
                    <i class="fas fa-times-circle"></i> Out of Stock
                  </span>
                </div>

                <!-- Short Description -->
                <div class="short-description">
                  <p>{{ product.description }}</p>
                </div>

                <!-- Add to Cart -->
                <div class="add-to-cart">
                  <div class="quantity-wrapper">
                    <button @click="decreaseQuantity" class="quantity-btn"><i class="fas fa-minus"></i></button>
                    <input type="number" v-model.number="quantity" min="1" :max="product.stock" class="quantity-input">
                    <button @click="increaseQuantity" class="quantity-btn"><i class="fas fa-plus"></i></button>
                  </div>

                  <button
                    @click="addToCart"
                    class="btn btn-primary btn-add-to-cart"
                    :disabled="product.stock === 0"
                  >
                    <i class="fas fa-shopping-cart"></i> ADD TO CART
                  </button>
                </div>

                <!-- Buy Now -->
                <button
                  @click="buyNow"
                  class="btn btn-dark btn-buy-now"
                  :disabled="product.stock === 0"
                >
                  BUY IT NOW
                </button>

                <!-- WhatsApp Order -->
                <a
                  :href="getWhatsAppLink"
                  target="_blank"
                  class="btn btn-success btn-whatsapp"
                >
                  <i class="fab fa-whatsapp"></i> ORDER ON WHATSAPP
                </a>

                <!-- Ask a Question -->
                <a href="#" class="ask-question">Ask a Question</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Information Tabs -->
        <div class="product-tabs">
          <b-tabs content-class="mt-3">
            <b-tab title="Description" active>
              <div class="tab-content">
                <h3>{{ product.name }} – Stylish, Durable & Versatile</h3>
                <p>{{ product.description }}</p>

                <h4>Measurements:</h4>
                <p>Width: {{ product.dimensions.width }}, Length: {{ product.dimensions.length }}, Depth: {{ product.dimensions.depth }}</p>

                <h4>Features:</h4>
                <p>The bag boasts top-notch quality, constructed from strong yet lightweight materials for extended durability. It offers ample space for daily necessities and features sturdy handles for effortless transport. The classic design effortlessly complements any attire, while also serving as an eco-friendly option for those who prioritize style, convenience, and sustainability. Add this bag to your collection today!</p>
              </div>
            </b-tab>
            <b-tab title="Delivery Information">
              <div class="tab-content">
                <h3>Delivery Details</h3>
                <p>We offer nationwide delivery across Pakistan.</p>
                <ul>
                  <li>Delivery within 2-3 business days for major cities</li>
                  <li>3-5 business days for other locations</li>
                  <li>Free shipping on orders above Rs. 3,000</li>
                  <li>Delivery charges: Rs. 200 for orders below Rs. 3,000</li>
                </ul>
                <p>For urgent delivery or any questions, please contact us at 0307 0405982</p>
              </div>
            </b-tab>
          </b-tabs>
        </div>

        <!-- Customer Reviews -->
        <div class="customer-reviews">
          <h2 class="section-title">Customer Reviews</h2>

          <div v-if="product.reviews > 0" class="reviews-list">
            <!-- This would be populated with actual reviews -->
            <div class="review-empty">Reviews would be displayed here from the backend</div>
          </div>
          <div v-else class="no-reviews">
            <p>Be the first to write a review</p>
            <button class="btn btn-outline-primary">Write a review</button>
          </div>
        </div>

        <!-- Related Products -->
        <div class="related-products">
          <h2 class="section-title">You may also like</h2>
          <div class="product-grid">
            <div v-for="product in relatedProducts" :key="product.id" class="product-card">
              <product-card :product="product"></product-card>
            </div>
          </div>
        </div>
      </template>

      <div v-else class="not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you are looking for does not exist or might have been removed.</p>
        <router-link to="/" class="btn btn-primary">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '@/components/product/ProductCard.vue'

export default {
  name: 'ProductDetail',
  components: {
    ProductCard
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      currentImage: '',
      quantity: 1,
      loading: true
    }
  },
  computed: {
    ...mapGetters(['allProducts', 'productById', 'relatedProducts']),
    product() {
      return this.productById(Number(this.id))
    },
    getWhatsAppLink() {
      // 确保只在客户端环境中访问window对象
      if (typeof window !== 'undefined') {
        return `https://wa.me/+923070405982?text=Hello, I would like to buy this product: ${this.product.name} ${window.location.href}`
      }
      // 服务器端渲染时返回基本链接
      return `https://wa.me/+923070405982?text=Hello, I would like to buy this product: ${this.product.name}`
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString()
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    increaseQuantity() {
      if (this.quantity < this.product.stock) {
        this.quantity++
      }
    },
    addToCart() {
      if (this.product.stock > 0) {
        this.$store.dispatch('addToCart', {
          product: this.product,
          quantity: this.quantity
        })
        alert(`${this.product.name} added to cart`)
      }
    },
    buyNow() {
      if (this.product.stock > 0) {
        this.$store.dispatch('addToCart', {
          product: this.product,
          quantity: this.quantity
        })
        this.$router.push('/checkout')
      }
    }
  },
  watch: {
    id() {
      // Reset quantity when product changes
      this.quantity = 1

      // Set current image to first image
      if (this.product && this.product.images.length > 0) {
        this.currentImage = this.product.images[0]
      }
    }
  },
  created() {
    this.$store.dispatch('loadProducts').then(() => {
      if (this.product && this.product.images.length > 0) {
        this.currentImage = this.product.images[0]
      }
      this.loading = false
    })
  }
}
</script>

<style scoped>
.product-detail-page {
  padding: 40px 0;
}

.breadcrumb-wrapper {
  margin-bottom: 30px;
}

.breadcrumb {
  background-color: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}

.breadcrumb-item a {
  color: #666;
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #333;
  font-weight: 500;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.product-detail {
  margin-bottom: 50px;
}

/* Product Images */
.product-images {
  margin-bottom: 30px;
}

.main-image {
  position: relative;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.main-image img {
  width: 100%;
  height: 500px;
  object-fit: contain;
}

.discount-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #8c241d;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 4px;
  z-index: 2;
}

.thumbnail-images {
  display: flex;
  gap: 10px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s;
}

.thumbnail.active {
  border-color: #8c241d;
  opacity: 1;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product Info */
.product-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
  line-height: 1.3;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.stars {
  color: #f9a825;
  font-size: 16px;
  margin-right: 10px;
}

.product-rating span {
  color: #666;
  font-size: 14px;
}

.product-price {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.regular-price {
  font-size: 18px;
  color: #999;
  text-decoration: line-through;
  margin-right: 10px;
}

.sale-price {
  font-size: 24px;
  font-weight: 700;
  color: #8c241d;
  margin-right: 10px;
}

.save-text {
  background-color: #8c241d;
  color: white;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 3px;
}

.stock-status {
  margin-bottom: 20px;
  font-size: 14px;
}

.in-stock {
  color: #2e7d32;
}

.out-of-stock {
  color: #c62828;
}

.stock-status i {
  margin-right: 5px;
}

.short-description {
  margin-bottom: 25px;
  line-height: 1.6;
  color: #555;
}

.add-to-cart {
  display: flex;
  margin-bottom: 20px;
}

.quantity-wrapper {
  display: flex;
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-input {
  width: 60px;
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.quantity-btn {
  background-color: #f7f7f7;
  border: none;
  width: 40px;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity-btn:hover {
  background-color: #eee;
}

.btn-add-to-cart {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-add-to-cart i {
  margin-right: 8px;
}

.btn-buy-now {
  width: 100%;
  margin-bottom: 15px;
}

.btn-whatsapp {
  width: 100%;
  margin-bottom: 20px;
  background-color: #25d366;
  border-color: #25d366;
}

.btn-whatsapp:hover {
  background-color: #1fba59;
  border-color: #1fba59;
}

.ask-question {
  display: block;
  text-align: center;
  color: #666;
  text-decoration: underline;
}

/* Tabs */
.product-tabs {
  margin-bottom: 50px;
}

.tab-content {
  padding: 20px;
  line-height: 1.6;
}

.tab-content h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
}

.tab-content h4 {
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* Customer Reviews */
.customer-reviews {
  margin-bottom: 50px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
}

.no-reviews {
  text-align: center;
  padding: 40px 0;
}

.no-reviews p {
  margin-bottom: 20px;
  color: #666;
}

.reviews-list, .review-empty {
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  color: #666;
}

/* Related Products */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.not-found {
  text-align: center;
  padding: 60px 0;
}

.not-found h2 {
  margin-bottom: 20px;
  font-size: 28px;
}

.not-found p {
  color: #666;
  margin-bottom: 30px;
}

@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .main-image img {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .add-to-cart {
    flex-direction: column;
  }

  .quantity-wrapper {
    margin-right: 0;
    margin-bottom: 15px;
    width: 100%;
  }

  .quantity-input {
    flex: 1;
  }
}

@media (max-width: 576px) {
  .product-title {
    font-size: 24px;
  }

  .main-image img {
    height: 300px;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
