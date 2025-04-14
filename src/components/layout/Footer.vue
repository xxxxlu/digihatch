<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Contact Information -->
        <div class="footer-column contact-info">
          <h3>Get in touch</h3>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <p>digihatch@digihatch.shop</p>
          </div>
        </div>

        <!-- Our Menu -->
        <div class="footer-column">
          <h3>Our Menu</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
          </ul>
        </div>

        <!-- Useful Links -->
        <div class="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
          </ul>
        </div>

        <!-- Newsletter Subscription -->
        <div class="footer-column newsletter">
          <h3>Footer Menu</h3>
          <p>Subscribe to our newsletter and get 10% off your first purchase</p>
          <div class="subscribe-form">
            <input
              type="email"
              placeholder="Your email address"
              v-model="email"
            >
            <button @click="subscribe" class="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <p>Copyright © 2025 Digihatch Store Powered by DATA TECH SOLUTIONS SMC PRIVATE LIMITED2</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: '',
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    subscribe() {
      if (this.email && this.validateEmail(this.email)) {
        alert('Thank you for subscribing to our newsletter!');
        this.email = '';
      } else {
        alert('Please enter a valid email address');
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #f9f9fb;
  padding: 60px 0 20px;
  margin-top: 60px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
  padding-right: 20px;
}

.footer-column h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  position: relative;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #8c241d;
}

.contact-info .contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  color: #666;
}

.contact-info .contact-item i {
  margin-right: 10px;
  color: #8c241d;
  min-width: 16px;
}

.social-links {
  display: flex;
  margin-top: 20px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f1f1f1;
  color: #666;
  margin-right: 10px;
  transition: all 0.3s;
}

.social-links a:hover {
  background-color: #8c241d;
  color: #fff;
}

.newsletter p {
  color: #666;
  margin-bottom: 15px;
}

.subscribe-form {
  display: flex;
  border-radius: 5px;
  overflow: hidden;
}

.subscribe-form input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.subscribe-btn {
  background-color: #333;
  color: white;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  transition: background-color 0.3s;
}

.subscribe-btn:hover {
  background-color: #8c241d;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
  color: #666;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-column {
    width: 100%;
    padding-right: 0;
  }
}
</style>
