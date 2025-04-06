<template>
  <div class="success-page">
    <div class="container">
      <div class="success-container">
        <div class="success-icon">
          <i class="fas fa-check-circle"></i>
        </div>

        <h1 class="success-title">Thank You for Your Order!</h1>
        <p class="success-message">Your order has been placed successfully and is being processed.</p>

        <div class="order-info">
          <div class="order-number">
            <strong>Order Number:</strong> #{{ orderNumber }}
          </div>
          <div class="order-date">
            <strong>Order Date:</strong> {{ orderDate }}
          </div>
        </div>

        <div class="order-details" v-if="checkoutInfo">
          <h2 class="details-title">Order Details</h2>

          <div class="details-section">
            <h3>Items</h3>
            <div class="order-items">
              <div class="order-item" v-for="item in checkoutInfo.orderSummary.items" :key="item.id">
                <div class="item-info">
                  <div class="item-quantity">{{ item.quantity }}x</div>
                  <div class="item-name">{{ item.name }}</div>
                </div>
                <div class="item-price">Rs.{{ formatPrice((item.salePrice || item.price) * item.quantity) }}</div>
              </div>
            </div>
          </div>

          <div class="details-section">
            <h3>Order Summary</h3>
            <div class="order-summary">
              <div class="summary-row">
                <div class="row-label">Subtotal:</div>
                <div class="row-value">Rs.{{ formatPrice(checkoutInfo.orderSummary.subtotal) }}</div>
              </div>
              <div class="summary-row">
                <div class="row-label">Shipping:</div>
                <div class="row-value">{{ checkoutInfo.orderSummary.shipping === 0 ? 'Free' : `Rs.${formatPrice(checkoutInfo.orderSummary.shipping)}` }}</div>
              </div>
              <div class="summary-row total">
                <div class="row-label">Total:</div>
                <div class="row-value">Rs.{{ formatPrice(checkoutInfo.orderSummary.total) }}</div>
              </div>
            </div>
          </div>

          <div class="details-section">
            <h3>Shipping Address</h3>
            <div class="address-details">
              <p>{{ checkoutInfo.billingDetails.firstName }} {{ checkoutInfo.billingDetails.lastName }}</p>
              <p>{{ checkoutInfo.billingDetails.address }}</p>
              <p v-if="checkoutInfo.billingDetails.address2">{{ checkoutInfo.billingDetails.address2 }}</p>
              <p>{{ checkoutInfo.billingDetails.city }}, {{ checkoutInfo.billingDetails.province }}</p>
              <p v-if="checkoutInfo.billingDetails.postalCode">{{ checkoutInfo.billingDetails.postalCode }}</p>
              <p>Pakistan</p>
              <p>{{ checkoutInfo.billingDetails.phone }}</p>
              <p>{{ checkoutInfo.billingDetails.email }}</p>
            </div>
          </div>

          <div class="details-section">
            <h3>Payment Method</h3>
            <p class="payment-method">
              {{ checkoutInfo.billingDetails.paymentMethod === 'cash_on_delivery' ? 'easypaisa' : 'frame' }}
            </p>
          </div>
        </div>

        <div class="success-actions">
          <router-link to="/" class="btn btn-primary">Continue Shopping</router-link>
          <button class="btn btn-secondary" @click="printOrder">Print Order</button>
        </div>

        <div class="customer-support">
          <p>If you have any questions about your order, please contact our customer service:</p>
          <p><strong>Phone:</strong> 0307 0405982</p>
          <p><strong>Email:</strong> pursebazar@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutSuccess',
  data() {
    return {
      orderNumber: 'PB' + Math.floor(10000 + Math.random() * 90000),
      orderDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  computed: {
    checkoutInfo() {
      return this.$store.state.checkoutInfo
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString()
    },
    printOrder() {
      // 确保只在客户端环境中访问window对象
      if (typeof window !== 'undefined') {
        window.print()
      }
    }
  },
  created() {
    // If there's no checkout info (e.g., user directly accessed this page), redirect to home
    if (!this.checkoutInfo) {
      this.$router.push('/')
    } else {
      // Clear the cart after successful order
      this.$store.dispatch('clearCart')
    }
  }
}
</script>

<style scoped>
.success-page {
  padding: 60px 0;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.success-container {
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  margin: 0 auto;
}

.success-icon {
  text-align: center;
  font-size: 80px;
  color: #28a745;
  margin-bottom: 20px;
}

.success-title {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.success-message {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.order-info {
  background-color: #f5f5f5;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.order-number, .order-date {
  font-size: 16px;
}

.order-details {
  margin-bottom: 30px;
}

.details-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.details-section {
  margin-bottom: 25px;
}

.details-section h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.order-items {
  border: 1px solid #eee;
  border-radius: 6px;
  overflow: hidden;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.order-item:last-child {
  border-bottom: none;
}

.item-info {
  display: flex;
  align-items: center;
}

.item-quantity {
  font-weight: 500;
  margin-right: 10px;
  color: #666;
}

.item-name {
  font-weight: 500;
}

.item-price {
  font-weight: 500;
}

.order-summary {
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 15px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.summary-row.total {
  border-top: 1px solid #ddd;
  margin-top: 8px;
  padding-top: 12px;
  font-size: 18px;
  font-weight: 600;
}

.address-details p {
  margin-bottom: 5px;
}

.payment-method {
  font-weight: 500;
}

.success-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.customer-support {
  text-align: center;
  color: #666;
  font-size: 14px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.customer-support p {
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .success-container {
    padding: 25px;
  }

  .order-info {
    flex-direction: column;
    gap: 10px;
  }
}

@media print {
  .success-actions,
  .success-icon,
  .navbar,
  .footer {
    display: none !important;
  }

  .success-container {
    box-shadow: none;
    padding: 0;
  }

  .success-page {
    background-color: white;
    padding: 0;
  }
}
</style>
