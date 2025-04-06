<template>
  <div class="product-card">
    <!-- Product discount badge -->
    <div v-if="product.discount > 0" class="discount-badge">-{{ product.discount }}%</div>

    <!-- Product image and hover actions -->
    <div class="product-image">
      <router-link :to="`/product/${product.id}`">
        <img :src="product.thumbnail" :alt="product.name" class="img-fluid">
      </router-link>

      <!-- Quick action buttons -->
      <div class="quick-actions">
        <button class="quick-view-btn" @click="quickView">
          <i class="fas fa-eye"></i>
          Quick view
        </button>
        <button class="add-to-cart-btn" @click="addToCart">
          <i class="fas fa-shopping-cart"></i>
          Add to cart
        </button>
        <button class="wishlist-btn" @click="toggleWishlist">
          <i class="fas fa-heart"></i>
          Add to Wishlist
        </button>
        <button class="compare-btn">
          <i class="fas fa-exchange-alt"></i>
          Compare
        </button>
      </div>
    </div>

    <!-- Product info -->
    <div class="product-info">
      <router-link :to="`/product/${product.id}`" class="product-title">
        <h3>{{ product.name }}</h3>
      </router-link>

      <!-- Product rating -->
      <div class="product-rating">
        <div v-if="product.rating > 0" class="stars">
          <i v-for="i in Math.floor(product.rating)" :key="i" class="fas fa-star"></i>
          <i v-if="product.rating % 1 > 0" class="fas fa-star-half-alt"></i>
          <i v-for="i in Math.floor(5 - product.rating)" :key="`empty-${i}`" class="far fa-star"></i>
        </div>
        <span v-if="product.reviews > 0">{{ product.reviews }} {{ product.reviews === 1 ? 'review' : 'reviews' }}</span>
        <span v-else>No reviews</span>
      </div>

      <!-- Product price -->
      <div class="product-price">
        <span v-if="product.discount > 0" class="regular-price">Rs.{{ formatPrice(product.price) }}</span>
        <span class="sale-price">Rs.{{ formatPrice(product.salePrice || product.price) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString()
    },
    quickView() {
      this.$emit('quick-view', this.product)
    },
    addToCart() {
      this.$store.dispatch('addToCart', { product: this.product, quantity: 1 })
      // Show notification
      this.showNotification(`${this.product.name} added to cart`)
    },
    toggleWishlist() {
      // This would be implemented with a wishlist feature
      this.showNotification(`${this.product.name} added to wishlist`)
    },
    showNotification(message) {
      // Simple alert notification for now
      alert(message)
    }
  }
}
</script>

<style scoped>
.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  margin-bottom: 20px;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.discount-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #8c241d;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 4px;
  z-index: 2;
}

.product-image {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.quick-actions {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  transition: bottom 0.3s;
}

.product-card:hover .quick-actions {
  bottom: 0;
}

.quick-actions button {
  background: none;
  border: none;
  padding: 8px;
  margin: 2px 0;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: color 0.3s;
  display: flex;
  align-items: center;
}

.quick-actions button i {
  margin-right: 8px;
  font-size: 16px;
}

.quick-actions button:hover {
  color: #8c241d;
}

.product-info {
  padding: 15px;
}

.product-title h3 {
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
  transition: color 0.3s;
  height: 44px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-title:hover h3 {
  color: #8c241d;
}

.product-rating {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  min-height: 20px;
}

.stars {
  color: #f9a825;
  margin-right: 8px;
}

.product-price {
  display: flex;
  align-items: center;
}

.regular-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin-right: 8px;
}

.sale-price {
  font-size: 16px;
  font-weight: 600;
  color: #8c241d;
}

@media (max-width: 576px) {
  .product-image {
    height: 200px;
  }
}
</style>
