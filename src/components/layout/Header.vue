<template>
  <header>
    <!-- Top announcement bar -->
    <div class="announcement-bar">
      <div class="container">
        <p>Eid Delivery (Nationwide by March 25, In Punjab by March 26, Only in Lahore by March 28.)</p>
        <div class="contact-info">
          <a href="#">
            <i class="fas fa-envelope"></i> digihatch@zontec.club
          </a>
        </div>
      </div>
    </div>

    <!-- Main header with logo and navigation -->
    <div class="main-header">
      <div class="container">
        <div class="header-content">
          <!-- Logo -->
          <router-link to="/" class="logo">
            <img src="../../assets/digihatch.png" alt="digihatch" />
          </router-link>

          <!-- Navigation -->
          <nav class="main-nav">
            <ul>
              <li><router-link to="/">Home</router-link></li>
            </ul>
          </nav>

          <!-- Right action icons -->
          <div class="header-actions">
            <router-link to="/cart" class="cart-icon">
              <i class="fas fa-shopping-cart"></i>
              <span class="badge">{{ cartItemCount }}</span>
              <span class="cart-total">Rs.{{ cartTotal }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      wishlistCount: 0
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'cartItemCount'])
  }
}
</script>

<style scoped>
.announcement-bar {
  background-color: #8c241d;
  color: white;
  padding: 8px 0;
  font-size: 14px;
}

.announcement-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  display: flex;
  gap: 15px;
}

.contact-info a {
  color: white;
  text-decoration: none;
}

.contact-info a i {
  margin-right: 5px;
}

.main-header {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  max-height: 60px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav ul li {
  position: relative;
  margin: 0 15px;
}

.main-nav ul li a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  display: block;
}

.main-nav ul li a:hover {
  color: #8c241d;
}

.has-dropdown {
  position: relative;
}

.has-dropdown .fa-chevron-down {
  font-size: 12px;
  margin-left: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 100;
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.dropdown-menu ul {
  display: block;
}

.dropdown-menu ul li {
  margin: 0;
}

.dropdown-menu ul li a {
  padding: 8px 20px;
}

.mega-menu {
  display: flex;
  min-width: 500px;
}

.dropdown-section {
  flex: 1;
  padding: 0 15px;
}

.dropdown-section h4 {
  font-size: 14px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  padding: 0 20px;
}

.dropdown-section ul.no-heading {
  margin-top: 30px;
}

.header-actions {
  display: flex;
  align-items: center;
}

.header-actions > * {
  margin-left: 20px;
  position: relative;
  cursor: pointer;
}

.header-actions i {
  font-size: 20px;
  color: #333;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #8c241d;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-total {
  font-size: 12px;
  color: #666;
  margin-left: 5px;
}

.cart-icon {
  display: flex;
  align-items: center;
}

@media (max-width: 992px) {
  .main-nav {
    display: none;
  }
}
</style>
