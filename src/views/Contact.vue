<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="page-title">CONTACT US</h1>

      <div class="row">
        <!-- Contact Form -->
        <div class="col-lg-7">
          <div class="contact-form-wrapper">
            <h2 class="section-title">DROP US A LINE</h2>

            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Your Name (required)</label>
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  class="form-control"
                  required
                >
              </div>

              <div class="form-group">
                <label for="email">Your Email (required)</label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  class="form-control"
                  required
                >
              </div>

              <div class="form-group">
                <label for="phone">Your Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="contactForm.phone"
                  class="form-control"
                >
              </div>

              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  class="form-control"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-send">Send</button>
            </form>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="col-lg-5">
          <div class="contact-info-wrapper">
            <h2 class="section-title">CONTACT INFORMATION</h2>

            <p class="intro-text">We love to hear from you on our customer service, merchandise.</p>

            <div class="contact-info">
              <div class="info-item">
                <div class="icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="details">
                  <h3>Our Location</h3>
                  <p>Office # 700, Block A-1 Township, Lahore</p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="details">
                  <h3>Phone Number</h3>
                  <p><a href="tel:+923070405982">0307 0405982</a></p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="details">
                  <h3>Email Address</h3>
                  <p><a href="mailto:pursebazar@gmail.com">pursebazar@gmail.com</a></p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="details">
                  <h3>Working Hours</h3>
                  <p>Everyday 9:00am-7:00pm</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3>Follow Us</h3>
              <div class="social-icons">
                <a href="https://www.facebook.com/pursebazarsupport" target="_blank" title="Follow on Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/pursebazarteam/" target="_blank" title="Follow on Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@pursebazar" target="_blank" title="Follow on YouTube">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.tiktok.com/@pursebazar" target="_blank" title="Follow on Tiktok">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="map-section">
        <h2 class="section-title">FIND US ON MAP</h2>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.9481915823894!2d74.2801187!3d31.5768344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c935d40952b%3A0x61cac07f9b0a06c1!2sTownship%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1643654991254!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Validate form
      if (this.validateForm()) {
        // In a real application, you would send the form data to a backend service
        alert('Thank you for your message! We will get back to you soon.');

        // Clear form
        this.contactForm = {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      }
    },
    validateForm() {
      // Basic validation
      if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
        alert('Please fill in all required fields')
        return false
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.contactForm.email)) {
        alert('Please enter a valid email address')
        return false
      }

      return true
    }
  }
}
</script>

<style scoped>
.contact-page {
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

.section-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 25px;
  color: #333;
}

/* Contact Form */
.contact-form-wrapper,
.contact-info-wrapper {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  height: 100%;
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
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #8c241d;
  outline: none;
  box-shadow: 0 0 0 3px rgba(140, 36, 29, 0.1);
}

.btn-send {
  padding: 12px 25px;
  font-weight: 500;
}

/* Contact Information */
.intro-text {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
}

.contact-info {
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  margin-bottom: 20px;
}

.info-item .icon {
  margin-right: 15px;
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8c241d;
  font-size: 16px;
}

.info-item .details h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
}

.info-item .details p {
  margin: 0;
  color: #666;
}

.info-item .details a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.info-item .details a:hover {
  color: #8c241d;
}

/* Social Links */
.social-links h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;
  transition: all 0.3s;
}

.social-icons a:hover {
  background-color: #8c241d;
  color: white;
}

/* Map Section */
.map-section {
  margin-top: 30px;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

iframe {
  display: block;
}

@media (max-width: 992px) {
  .contact-info-wrapper {
    margin-top: 0;
  }
}

@media (max-width: 576px) {
  .contact-form-wrapper,
  .contact-info-wrapper {
    padding: 20px;
  }
}
</style>
