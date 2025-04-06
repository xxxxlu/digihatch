"use strict";(self["webpackChunkpursebazar"]=self["webpackChunkpursebazar"]||[]).push([[965],{311:function(t,s,a){a.d(s,{A:function(){return d}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"product-card"},[t.product.discount>0?s("div",{staticClass:"discount-badge"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e(),s("div",{staticClass:"product-image"},[s("router-link",{attrs:{to:`/product/${t.product.id}`}},[s("img",{staticClass:"img-fluid",attrs:{src:t.product.thumbnail,alt:t.product.name}})]),s("div",{staticClass:"quick-actions"},[s("button",{staticClass:"quick-view-btn",on:{click:t.quickView}},[s("i",{staticClass:"fas fa-eye"}),t._v(" Quick view ")]),s("button",{staticClass:"add-to-cart-btn",on:{click:t.addToCart}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" Add to cart ")]),s("button",{staticClass:"wishlist-btn",on:{click:t.toggleWishlist}},[s("i",{staticClass:"fas fa-heart"}),t._v(" Add to Wishlist ")]),t._m(0)])],1),s("div",{staticClass:"product-info"},[s("router-link",{staticClass:"product-title",attrs:{to:`/product/${t.product.id}`}},[s("h3",[t._v(t._s(t.product.name))])]),s("div",{staticClass:"product-rating"},[t.product.rating>0?s("div",{staticClass:"stars"},[t._l(Math.floor(t.product.rating),(function(t){return s("i",{key:t,staticClass:"fas fa-star"})})),t.product.rating%1>0?s("i",{staticClass:"fas fa-star-half-alt"}):t._e(),t._l(Math.floor(5-t.product.rating),(function(t){return s("i",{key:`empty-${t}`,staticClass:"far fa-star"})}))],2):t._e(),t.product.reviews>0?s("span",[t._v(t._s(t.product.reviews)+" "+t._s(1===t.product.reviews?"review":"reviews"))]):s("span",[t._v("No reviews")])]),s("div",{staticClass:"product-price"},[t.product.discount>0?s("span",{staticClass:"regular-price"},[t._v("Rs."+t._s(t.formatPrice(t.product.price)))]):t._e(),s("span",{staticClass:"sale-price"},[t._v("Rs."+t._s(t.formatPrice(t.product.salePrice||t.product.price)))])])],1)])},r=[function(){var t=this,s=t._self._c;return s("button",{staticClass:"compare-btn"},[s("i",{staticClass:"fas fa-exchange-alt"}),t._v(" Compare ")])}],e={name:"ProductCard",props:{product:{type:Object,required:!0}},methods:{formatPrice(t){return t.toLocaleString()},quickView(){this.$emit("quick-view",this.product)},addToCart(){this.$store.dispatch("addToCart",{product:this.product,quantity:1}),this.showNotification(`${this.product.name} added to cart`)},toggleWishlist(){this.showNotification(`${this.product.name} added to wishlist`)},showNotification(t){alert(t)}}},c=e,o=a(656),n=(0,o.A)(c,i,r,!1,null,"71aa4979",null),d=n.exports},965:function(t,s,a){a.r(s),a.d(s,{default:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"product-detail-page"},[s("div",{staticClass:"container"},[s("div",{staticClass:"breadcrumb-wrapper"},[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:`/collections/${t.product?.category?.toLowerCase()}`}},[t._v(t._s(t.product?.category))])],1),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product?.name))])])])]),t.loading?s("div",{staticClass:"loading-container"},[t._m(0)]):t.product?[s("div",{staticClass:"product-detail"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"product-images"},[s("div",{staticClass:"main-image"},[s("img",{staticClass:"img-fluid",attrs:{src:t.currentImage,alt:t.product.name}}),t.product.discount>0?s("div",{staticClass:"discount-badge"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),s("div",{staticClass:"thumbnail-images"},t._l(t.product.images,(function(a,i){return s("div",{key:i,staticClass:"thumbnail",class:{active:t.currentImage===a},on:{click:function(s){t.currentImage=a}}},[s("img",{staticClass:"img-fluid",attrs:{src:a,alt:`${t.product.name} - Thumbnail ${i+1}`}})])})),0)])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"product-info"},[s("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),s("div",{staticClass:"product-rating"},[s("div",{staticClass:"stars"},[t._l(Math.floor(t.product.rating),(function(t){return s("i",{key:t,staticClass:"fas fa-star"})})),t.product.rating%1>0?s("i",{staticClass:"fas fa-star-half-alt"}):t._e(),t._l(Math.floor(5-t.product.rating),(function(t){return s("i",{key:`empty-${t}`,staticClass:"far fa-star"})}))],2),s("span",[t._v(t._s(0===t.product.reviews?"No reviews":`${t.product.reviews} ${1===t.product.reviews?"review":"reviews"}`))])]),s("div",{staticClass:"product-price"},[t.product.discount>0?s("span",{staticClass:"regular-price"},[t._v("Rs."+t._s(t.formatPrice(t.product.price)))]):t._e(),s("span",{staticClass:"sale-price"},[t._v("Rs."+t._s(t.formatPrice(t.product.salePrice||t.product.price)))]),t.product.discount>0?s("span",{staticClass:"save-text"},[t._v("SAVE "+t._s(t.product.discount)+"%")]):t._e()]),s("div",{staticClass:"stock-status"},[t.product.stock>0?s("span",{staticClass:"in-stock"},[s("i",{staticClass:"fas fa-check-circle"}),t._v(" In Stock ("+t._s(t.product.stock)+" available) ")]):s("span",{staticClass:"out-of-stock"},[s("i",{staticClass:"fas fa-times-circle"}),t._v(" Out of Stock ")])]),s("div",{staticClass:"short-description"},[s("p",[t._v(t._s(t.product.description))])]),s("div",{staticClass:"add-to-cart"},[s("div",{staticClass:"quantity-wrapper"},[s("button",{staticClass:"quantity-btn",on:{click:t.decreaseQuantity}},[s("i",{staticClass:"fas fa-minus"})]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"quantity-input",attrs:{type:"number",min:"1",max:t.product.stock},domProps:{value:t.quantity},on:{input:function(s){s.target.composing||(t.quantity=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}}),s("button",{staticClass:"quantity-btn",on:{click:t.increaseQuantity}},[s("i",{staticClass:"fas fa-plus"})])]),s("button",{staticClass:"btn btn-primary btn-add-to-cart",attrs:{disabled:0===t.product.stock},on:{click:t.addToCart}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" ADD TO CART ")])]),s("button",{staticClass:"btn btn-dark btn-buy-now",attrs:{disabled:0===t.product.stock},on:{click:t.buyNow}},[t._v(" BUY IT NOW ")]),s("a",{staticClass:"btn btn-success btn-whatsapp",attrs:{href:t.getWhatsAppLink,target:"_blank"}},[s("i",{staticClass:"fab fa-whatsapp"}),t._v(" ORDER ON WHATSAPP ")]),s("a",{staticClass:"ask-question",attrs:{href:"#"}},[t._v("Ask a Question")])])])])]),s("div",{staticClass:"product-tabs"},[s("b-tabs",{attrs:{"content-class":"mt-3"}},[s("b-tab",{attrs:{title:"Description",active:""}},[s("div",{staticClass:"tab-content"},[s("h3",[t._v(t._s(t.product.name)+" – Stylish, Durable & Versatile")]),s("p",[t._v(t._s(t.product.description))]),s("h4",[t._v("Measurements:")]),s("p",[t._v("Width: "+t._s(t.product.dimensions.width)+", Length: "+t._s(t.product.dimensions.length)+", Depth: "+t._s(t.product.dimensions.depth))]),s("h4",[t._v("Features:")]),s("p",[t._v("The bag boasts top-notch quality, constructed from strong yet lightweight materials for extended durability. It offers ample space for daily necessities and features sturdy handles for effortless transport. The classic design effortlessly complements any attire, while also serving as an eco-friendly option for those who prioritize style, convenience, and sustainability. Add this bag to your collection today!")])])]),s("b-tab",{attrs:{title:"Delivery Information"}},[s("div",{staticClass:"tab-content"},[s("h3",[t._v("Delivery Details")]),s("p",[t._v("We offer nationwide delivery across Pakistan.")]),s("ul",[s("li",[t._v("Delivery within 2-3 business days for major cities")]),s("li",[t._v("3-5 business days for other locations")]),s("li",[t._v("Free shipping on orders above Rs. 3,000")]),s("li",[t._v("Delivery charges: Rs. 200 for orders below Rs. 3,000")])]),s("p",[t._v("For urgent delivery or any questions, please contact us at 0307 0405982")])])])],1)],1),s("div",{staticClass:"customer-reviews"},[s("h2",{staticClass:"section-title"},[t._v("Customer Reviews")]),t.product.reviews>0?s("div",{staticClass:"reviews-list"},[s("div",{staticClass:"review-empty"},[t._v("Reviews would be displayed here from the backend")])]):s("div",{staticClass:"no-reviews"},[s("p",[t._v("Be the first to write a review")]),s("button",{staticClass:"btn btn-outline-primary"},[t._v("Write a review")])])]),s("div",{staticClass:"related-products"},[s("h2",{staticClass:"section-title"},[t._v("You may also like")]),s("div",{staticClass:"product-grid"},t._l(t.relatedProducts,(function(t){return s("div",{key:t.id,staticClass:"product-card"},[s("product-card",{attrs:{product:t}})],1)})),0)])]:s("div",{staticClass:"not-found"},[s("h2",[t._v("Product Not Found")]),s("p",[t._v("Sorry, the product you are looking for does not exist or might have been removed.")]),s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[t._v("Back to Home")])],1)],2)])},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],e=a(353),c=a(311),o={name:"ProductDetail",components:{ProductCard:c.A},props:{id:{type:[String,Number],required:!0}},data(){return{currentImage:"",quantity:1,loading:!0}},computed:{...(0,e.L8)(["allProducts","productById","relatedProducts"]),product(){return this.productById(Number(this.id))},getWhatsAppLink(){return"undefined"!==typeof window?`https://wa.me/+923070405982?text=Hello, I would like to buy this product: ${this.product.name} ${window.location.href}`:`https://wa.me/+923070405982?text=Hello, I would like to buy this product: ${this.product.name}`}},methods:{formatPrice(t){return t.toLocaleString()},decreaseQuantity(){this.quantity>1&&this.quantity--},increaseQuantity(){this.quantity<this.product.stock&&this.quantity++},addToCart(){this.product.stock>0&&(this.$store.dispatch("addToCart",{product:this.product,quantity:this.quantity}),alert(`${this.product.name} added to cart`))},buyNow(){this.product.stock>0&&(this.$store.dispatch("addToCart",{product:this.product,quantity:this.quantity}),this.$router.push("/checkout"))}},watch:{id(){this.quantity=1,this.product&&this.product.images.length>0&&(this.currentImage=this.product.images[0])}},created(){this.$store.dispatch("loadProducts").then((()=>{this.product&&this.product.images.length>0&&(this.currentImage=this.product.images[0]),this.loading=!1}))}},n=o,d=a(656),u=(0,d.A)(n,i,r,!1,null,"214b794c",null),l=u.exports}}]);