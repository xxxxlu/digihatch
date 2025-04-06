<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="page-title">SHOPPING CART</h1>

      <div v-if="cartItems.length === 0" class="empty-cart">
        <div class="empty-cart-icon">
          <i class="fas fa-shopping-cart"></i>
          <i class="fas fa-times"></i>
        </div>
        <h2>Your cart is empty.</h2>
        <p>Before proceed to checkout you must add some products to your shopping cart.<br>
        You will find a lot of interesting products on our "Shop" page.</p>
        <router-link to="/" class="btn btn-primary">Return To Shop</router-link>
      </div>

      <div v-else class="cart-content">
        <div class="row">
          <!-- Cart Items -->
          <div class="col-lg-8">
            <div class="cart-items">
              <div class="cart-header">
                <div class="row">
                  <div class="col-md-6">Product</div>
                  <div class="col-md-2">Price</div>
                  <div class="col-md-2">Quantity</div>
                  <div class="col-md-2">Total</div>
                </div>
              </div>

              <div class="cart-item" v-for="item in cartItems" :key="item.id">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <div class="cart-product">
                      <button class="remove-item" @click="removeItem(item.id)">
                        <i class="fas fa-times"></i>
                      </button>
                      <div class="product-image">
                        <img :src="item.thumbnail" :alt="item.name">
                      </div>
                      <div class="product-info">
                        <h3 class="product-title">{{ item.name }}</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 text-md-center">
                    <div class="product-price">Rs.{{ formatPrice(item.salePrice || item.price) }}</div>
                  </div>
                  <div class="col-md-2">
                    <div class="quantity-control">
                      <button @click="decreaseQuantity(item)" class="quantity-btn">
                        <i class="fas fa-minus"></i>
                      </button>
                      <input
                        type="number"
                        v-model.number="item.quantity"
                        @change="updateQuantity(item)"
                        min="1"
                        :max="item.stock"
                        class="quantity-input"
                      >
                      <button @click="increaseQuantity(item)" class="quantity-btn">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-2 text-md-center">
                    <div class="product-total">Rs.{{ formatPrice((item.salePrice || item.price) * item.quantity) }}</div>
                  </div>
                </div>
              </div>

              <div class="cart-actions">
                <div class="coupon">
                  <input type="text" placeholder="Coupon code" v-model="couponCode">
                  <button class="btn btn-outline-primary">Apply Coupon</button>
                </div>
                <button @click="clearCart" class="btn btn-outline-secondary">Clear Cart</button>
              </div>
            </div>
          </div>

          <!-- Cart Summary -->
          <div class="col-lg-4">
            <div class="cart-summary">
              <h2 class="summary-title">Order Summary</h2>

              <div class="summary-item subtotal">
                <span class="label">Subtotal:</span>
                <span class="value">Rs.{{ formatPrice(cartTotal) }}</span>
              </div>

              <div class="summary-item shipping">
                <span class="label">Shipping:</span>
                <span class="value">Calculated at checkout</span>
              </div>

              <div class="summary-item tax">
                <span class="label">Tax:</span>
                <span class="value">Calculated at checkout</span>
              </div>

              <div class="summary-item total">
                <span class="label">Total:</span>
                <span class="value">Rs.{{ formatPrice(cartTotal) }}</span>
              </div>

              <router-link to="/checkout" class="btn btn-primary btn-checkout">
                Proceed to Checkout
              </router-link>

              <div class="shipping-estimate">
                <h3>Estimate Shipping</h3>
                <div class="form-group">
                  <label>Country</label>
                  <select class="form-control">
                    <option value="">Select Country</option>
                    <option value="pakistan" selected>Pakistan</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Province</label>
                  <select class="form-control">
                    <option value="">Select Province</option>
                    <option value="punjab">Punjab</option>
                    <option value="sindh">Sindh</option>
                    <option value="kpk">KPK</option>
                    <option value="balochistan">Balochistan</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Zip Code</label>
                  <input type="text" class="form-control" placeholder="Enter Zip Code">
                </div>
                <button class="btn btn-outline-primary btn-sm">Calculate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  data() {
    return {
      couponCode: ''
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString()
    },
    removeItem(productId) {
      if (confirm('Are you sure you want to remove this item from your cart?')) {
        this.$store.dispatch('removeFromCart', productId)
      }
    },
    increaseQuantity(item) {
      if (item.quantity < item.stock) {
        this.$store.dispatch('updateCartItemQuantity', {
          productId: item.id,
          quantity: item.quantity + 1
        })
      }
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        this.$store.dispatch('updateCartItemQuantity', {
          productId: item.id,
          quantity: item.quantity - 1
        })
      }
    },
    updateQuantity(item) {
      // Ensure quantity is valid
      let quantity = parseInt(item.quantity)

      if (isNaN(quantity) || quantity < 1) {
        quantity = 1
      } else if (quantity > item.stock) {
        quantity = item.stock
      }

      this.$store.dispatch('updateCartItemQuantity', {
        productId: item.id,
        quantity
      })
    },
    clearCart() {
      if (confirm('Are you sure you want to clear your cart?')) {
        this.$store.dispatch('clearCart')
      }
    }
  },
  created() {
    // Initialize the store
    this.$store.dispatch('initializeStore')
  }
}
</script>

<style scoped>
.cart-page {
  padding: 60px 0;
}

.page-title {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #333;
  text-transform: uppercase;
}

/* Empty Cart */
.empty-cart {
  text-align: center;
  padding: 60px 0;
}

.empty-cart-icon {
  font-size: 64px;
  color: #ddd;
  margin-bottom: 20px;
  position: relative;
}

.empty-cart-icon .fa-times {
  position: absolute;
  font-size: 24px;
  color: #8c241d;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.empty-cart h2 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
}

.empty-cart p {
  color: #666;
  max-width: 500px;
  margin: 0 auto 30px;
}

/* Cart Items */
.cart-header {
  font-weight: 600;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.cart-item {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.cart-product {
  display: flex;
  align-items: center;
}

.remove-item {
  background: none;
  border: none;
  color: #999;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  margin-right: 15px;
  transition: color 0.3s;
}

.remove-item:hover {
  color: #8c241d;
}

.product-image {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.product-title {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.product-price,
.product-total {
  font-weight: 500;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  max-width: 120px;
  margin: 0 auto;
}

.quantity-btn {
  background-color: #f7f7f7;
  border: none;
  width: 30px;
  height: 36px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity-input {
  width: 60px;
  height: 36px;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  text-align: center;
  font-size: 14px;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  flex-wrap: wrap;
}

.coupon {
  display: flex;
  margin-bottom: 15px;
}

.coupon input {
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  padding: 8px 15px;
  font-size: 14px;
  width: 200px;
}

.coupon .btn {
  border-radius: 0 4px 4px 0;
}

/* Cart Summary */
.cart-summary {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 25px;
}

.summary-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.summary-item.total {
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.btn-checkout {
  width: 100%;
  margin-bottom: 20px;
  font-weight: 500;
  padding: 12px;
}

.payment-methods {
  text-align: center;
  margin-bottom: 20px;
}

.payment-methods p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.payment-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 24px;
  color: #666;
}

.shipping-estimate {
  margin-top: 25px;
}

.shipping-estimate h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

@media (max-width: 992px) {
  .cart-summary {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .cart-header {
    display: none;
  }

  .cart-item .row {
    flex-direction: column;
  }

  .cart-item .col-md-2,
  .cart-item .col-md-6 {
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }

  .cart-product {
    flex-direction: column;
  }

  .product-image {
    margin-right: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .remove-item {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .cart-item {
    position: relative;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .cart-actions {
    flex-direction: column;
  }

  .coupon {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
