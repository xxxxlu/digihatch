<template>
  <div class="checkout-page">
    <div class="container">
      <h1 class="page-title">CHECKOUT</h1>

      <div v-if="cartItems.length === 0" class="empty-checkout">
        <h2>Your cart is empty</h2>
        <p>You need to add some products to your cart before proceeding to checkout.</p>
        <router-link to="/" class="btn btn-primary">Return to Shop</router-link>
      </div>

      <div v-else class="checkout-content">
        <div class="row">
          <!-- Order Summary -->
          <div class="col-lg-5 order-lg-2">
            <div class="order-summary">
              <h2 class="summary-title">Your Order</h2>

              <div class="summary-products">
                <div class="summary-product" v-for="item in cartItems" :key="item.id">
                  <div class="product-info">
                    <img :src="item.thumbnail" :alt="item.name" class="product-thumbnail">
                    <div class="product-details">
                      <h3 class="product-title">{{ item.name }}</h3>
                      <p class="product-meta">Quantity: {{ item.quantity }}</p>
                    </div>
                  </div>
                  <div class="product-price">Rs.{{ formatPrice((item.salePrice || item.price) * item.quantity) }}</div>
                </div>
              </div>

              <div class="summary-totals">
                <div class="summary-item subtotal">
                  <span class="label">Subtotal:</span>
                  <span class="value">Rs.{{ formatPrice(cartTotal) }}</span>
                </div>

                <div class="summary-item shipping">
                  <span class="label">Shipping:</span>
                  <span class="value" v-if="cartTotal >= 3000">Free</span>
                  <span class="value" v-else>Rs.200</span>
                </div>

                <div class="summary-item total">
                  <span class="label">Total:</span>
                  <span class="value">Rs.{{ formatPrice(orderTotal) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Checkout Form -->
          <div class="col-lg-7 order-lg-1">
            <div class="checkout-form">
              <h2 class="form-title">Billing Details</h2>

              <form @submit.prevent="proceedToPayment">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        v-model="billingDetails.firstName"
                        class="form-control"
                        required
                      >
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        v-model="billingDetails.lastName"
                        class="form-control"
                        required
                      >
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="billingDetails.phone"
                    class="form-control"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="billingDetails.email"
                    class="form-control"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="address">Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    v-model="billingDetails.address"
                    class="form-control"
                    placeholder="House number and street name"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="address2">Apartment, suite, unit, etc. (optional)</label>
                  <input
                    type="text"
                    id="address2"
                    v-model="billingDetails.address2"
                    class="form-control"
                  >
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="city">Town / City *</label>
                      <input
                        type="text"
                        id="city"
                        v-model="billingDetails.city"
                        class="form-control"
                        required
                      >
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="province">Province *</label>
                      <select
                        id="province"
                        v-model="billingDetails.province"
                        class="form-control"
                        required
                      >
                        <option value="">Select Province</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Sindh">Sindh</option>
                        <option value="KPK">Khyber Pakhtunkhwa</option>
                        <option value="Balochistan">Balochistan</option>
                        <option value="Gilgit Baltistan">Gilgit Baltistan</option>
                        <option value="AJK">Azad Jammu & Kashmir</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="postalCode">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    v-model="billingDetails.postalCode"
                    class="form-control"
                  >
                </div>

                <div class="form-group">
                  <label for="orderNotes">Order Notes (optional)</label>
                  <textarea
                    id="orderNotes"
                    v-model="billingDetails.notes"
                    class="form-control"
                    rows="4"
                    placeholder="Notes about your order, e.g. special delivery instructions"
                  ></textarea>
                </div>

                <h3 class="payment-title">Payment Method</h3>

                <div class="payment-methods">
                  <div class="payment-method">
                    <input
                      type="radio"
                      id="cod"
                      value="cash_on_delivery"
                      v-model="billingDetails.paymentMethod"
                      required
                    >
                    <label for="cod">easypaisa</label>
                    <img src="../assets/easypaisa.png" alt="" style="width: 100px;height: 70px;">
                    <div v-if="billingDetails.paymentMethod === 'cash_on_delivery'" class="payment-info">
                      Pay with cash upon delivery.
                    </div>
                  </div>

                  <div class="payment-method">
                    <input
                      type="radio"
                      id="bank"
                      value="bank_transfer"
                      v-model="billingDetails.paymentMethod"
                    >
                    <label for="bank">Frame</label>
                    <img src="../assets/Frame.png" alt="" style="width: 100px;height: 70px;">
                    <div v-if="billingDetails.paymentMethod === 'bank_transfer'" class="payment-info">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </div>
                  </div>
                </div>

                <div class="checkout-actions">
                  <button type="submit" class="btn btn-primary btn-place-order">Place Order</button>
                  <router-link to="/cart" class="btn btn-outline-secondary">Back to Cart</router-link>
                </div>
              </form>
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
  name: 'Checkout',
  data() {
    return {
      billingDetails: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        notes: '',
        paymentMethod: 'cash_on_delivery'
      }
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
    orderTotal() {
      return this.cartTotal >= 3000 ? this.cartTotal : this.cartTotal + 200
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString()
    },
    proceedToPayment() {
      // Validate form
      if (this.validateForm()) {
        // Save checkout info to store
        this.$store.dispatch('saveCheckoutInfo', {
          billingDetails: this.billingDetails,
          orderSummary: {
            items: this.cartItems,
            subtotal: this.cartTotal,
            shipping: this.cartTotal >= 3000 ? 0 : 200,
            total: this.orderTotal
          }
        })

        // Redirect to order confirmation
        this.$router.push('/checkout-success')
      }
    },
    validateForm() {
      // Basic validation can be expanded
      if (!this.billingDetails.firstName ||
          !this.billingDetails.lastName ||
          !this.billingDetails.phone ||
          !this.billingDetails.email ||
          !this.billingDetails.address ||
          !this.billingDetails.city ||
          !this.billingDetails.province) {
        alert('Please fill in all required fields')
        return false
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.billingDetails.email)) {
        alert('Please enter a valid email address')
        return false
      }

      // Phone validation (simple check for Pakistan numbers)
      const phoneRegex = /^((\+92)|(0092)|(0))(3)([0-9]{9})$/
      if (!phoneRegex.test(this.billingDetails.phone)) {
        alert('Please enter a valid Pakistan phone number (e.g., +923012345678 or 03012345678)')
        return false
      }

      return true
    }
  },
  created() {
    // Initialize the store
    this.$store.dispatch('initializeStore')
  }
}
</script>

<style scoped>
.checkout-page {
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

.empty-checkout {
  text-align: center;
  padding: 60px 0;
}

.empty-checkout h2 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
}

.empty-checkout p {
  color: #666;
  max-width: 500px;
  margin: 0 auto 30px;
}

/* Order Summary */
.order-summary {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 25px;
  position: sticky;
  top: 20px;
}

.summary-title, .form-title, .payment-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.summary-products {
  margin-bottom: 20px;
  max-height: 300px;
  overflow-y: auto;
}

.summary-product {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.product-info {
  display: flex;
  align-items: center;
  flex: 1;
}

.product-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
}

.product-details {
  flex: 1;
}

.product-title {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 5px;
}

.product-meta {
  font-size: 12px;
  color: #666;
  margin: 0;
}

.product-price {
  font-weight: 500;
  margin-left: 10px;
}

.summary-totals {
  padding-top: 15px;
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

/* Checkout Form */
.checkout-form {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 14px;
}

.form-control {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #8c241d;
  outline: none;
  box-shadow: 0 0 0 3px rgba(140, 36, 29, 0.1);
}

.payment-title {
  margin-top: 30px;
}

.payment-methods {
  margin-bottom: 30px;
}

.payment-method {
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.payment-method input[type="radio"] {
  margin-right: 10px;
}

.payment-method label {
  display: inline;
  font-weight: 600;
}

.payment-info {
  margin-top: 10px;
  padding-left: 25px;
  font-size: 14px;
  color: #666;
}

.checkout-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-place-order {
  padding: 12px 25px;
}

@media (max-width: 992px) {
  .order-summary {
    margin-top: 30px;
    position: static;
  }
}

@media (max-width: 576px) {
  .checkout-form {
    padding: 20px;
  }

  .checkout-actions {
    flex-direction: column-reverse;
    gap: 15px;
  }

  .btn-place-order, .checkout-actions .btn-outline-secondary {
    width: 100%;
  }
}
</style>
