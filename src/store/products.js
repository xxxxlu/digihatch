// Mock product data
const products = [
  {
    "id": 1,
    "name": "Hijab Girl Beige Canvas Tote Bag",
    "slug": "hijab-girl-beige-canvas-tote-bag",
    "category": "Tote Bags",
    "price": 4499,
    "salePrice": 2299,
    "discount": 49,
    "images": [
      "https://m.media-amazon.com/images/I/71uUGyltl4L._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71uUGyltl4L._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Hijab Girl Beige Canvas Tote Bag – Stylish, Durable & Versatile. Upgrade your everyday carry with our Hijab Girl Beige Canvas Tote Bag, a perfect blend of fashion and function. Made from high-quality, eco-friendly fabric, this tote is designed for durability and style.",
    "featured": true,
    "new": true,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "4\""
    },
    "stock": 15,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 2,
    "name": "Hijab Girl Dark Brown Canvas Tote Bag",
    "slug": "hijab-girl-dark-brown-canvas-tote-bag",
    "category": "Tote Bags",
    "price": 4499,
    "salePrice": 2299,
    "discount": 49,
    "images": [
      "https://m.media-amazon.com/images/I/61Qi9U811fL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/61Qi9U811fL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Hijab Girl Dark Brown Canvas Tote Bag – Stylish, Durable & Versatile. Upgrade your everyday carry with our Hijab Girl Dark Brown Canvas Tote Bag, a perfect blend of fashion and function. Made from high-quality, eco-friendly fabric, this tote is designed for durability and style.",
    "featured": true,
    "new": true,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "4\""
    },
    "stock": 12,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 3,
    "name": "Hijab Girl Red Canvas Tote Bag",
    "slug": "hijab-girl-red-canvas-tote-bag",
    "category": "Tote Bags",
    "price": 4499,
    "salePrice": 2299,
    "discount": 49,
    "images": [
      "https://m.media-amazon.com/images/I/71azdjeTqGL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71azdjeTqGL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Hijab Girl Red Canvas Tote Bag – Stylish, Durable & Versatile. Upgrade your everyday carry with our Hijab Girl Red Canvas Tote Bag, a perfect blend of fashion and function. Made from high-quality, eco-friendly fabric, this tote is designed for durability and style.",
    "featured": false,
    "new": true,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "4\""
    },
    "stock": 10,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 4,
    "name": "Hijab Girl Black Canvas Tote Bag",
    "slug": "hijab-girl-black-canvas-tote-bag",
    "category": "Tote Bags",
    "price": 4499,
    "salePrice": 2299,
    "discount": 49,
    "images": [
      "https://m.media-amazon.com/images/I/71fYIfDS1lL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71fYIfDS1lL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Hijab Girl Black Canvas Tote Bag – Stylish, Durable & Versatile. Upgrade your everyday carry with our Hijab Girl Black Canvas Tote Bag, a perfect blend of fashion and function. Made from high-quality, eco-friendly fabric, this tote is designed for durability and style.",
    "featured": false,
    "new": true,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "4\""
    },
    "stock": 18,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 5,
    "name": "Black Luxury Tote Bag",
    "slug": "black-luxury-tote-bag",
    "category": "Tote Bags",
    "price": 3999,
    "salePrice": 2199,
    "discount": 45,
    "images": [
      "https://m.media-amazon.com/images/I/71zEqq8me7L._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71zEqq8me7L._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Experience everyday sophistication with our Black Luxury Tote Bag, perfect for the modern woman on the go. Crafted from durable material, this tote bag features a timeless black checkered design that effortlessly complements any outfit.",
    "featured": true,
    "new": true,
    "dimensions": {
      "width": "16\"",
      "length": "12\"",
      "depth": "3\""
    },
    "stock": 20,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 6,
    "name": "Luxury Brown Tote Bag",
    "slug": "luxury-brown-tote-bag",
    "category": "Tote Bags",
    "price": 3999,
    "salePrice": 2100,
    "discount": 47,
    "images": [
      "https://m.media-amazon.com/images/I/91J4nXLDSqL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/91J4nXLDSqL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Experience everyday sophistication with our Luxury Brown Tote Bag, perfect for the modern woman on the go. Crafted from durable material, this tote bag features a timeless brown design that effortlessly complements any outfit.",
    "featured": true,
    "new": true,
    "dimensions": {
      "width": "16\"",
      "length": "12\"",
      "depth": "3\""
    },
    "stock": 15,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 7,
    "name": "Black Luxury Crocodial Tote Bag",
    "slug": "black-luxury-crocodial-tote-bag",
    "category": "Tote Bags",
    "price": 4199,
    "salePrice": 2399,
    "discount": 43,
    "images": [
      "https://m.media-amazon.com/images/I/71gAGlJcW8L._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71gAGlJcW8L._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Experience everyday sophistication with our Black Luxury Crocodial Tote Bag, perfect for the modern woman on the go. Crafted from durable material, this tote bag features a timeless black crocodile pattern that effortlessly complements any outfit.",
    "featured": true,
    "new": true,
    "dimensions": {
      "width": "16\"",
      "length": "12\"",
      "depth": "3\""
    },
    "stock": 9,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 8,
    "name": "Lily Asiatic Tote Bag",
    "slug": "lily-asiatic-tote-bag",
    "category": "Tote Bags",
    "price": 3399,
    "salePrice": 1999,
    "discount": 41,
    "images": [
      "https://m.media-amazon.com/images/I/81Y81-eVDDL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/81Y81-eVDDL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Upgrade your style with the Lily Asiatic Tote Bag, perfect for everyday use. This elegant and spacious tote features a beautiful design and is made from high-quality materials for lasting durability.",
    "featured": false,
    "new": true,
    "dimensions": {
      "width": "15\"",
      "length": "12\"",
      "depth": "4\""
    },
    "stock": 7,
    "reviews": 2,
    "rating": 4
  },
  {
    "id": 9,
    "name": "Lily Calla Tote Bag",
    "slug": "lily-calla-tote-bag",
    "category": "Tote Bags",
    "price": 3399,
    "salePrice": 1999,
    "discount": 41,
    "images": [
      "https://m.media-amazon.com/images/I/71rixUNfg4L._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71rixUNfg4L._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Upgrade your style with the Lily Calla Tote Bag, perfect for everyday use. This elegant and spacious tote features a beautiful design and is made from high-quality materials for lasting durability.",
    "featured": false,
    "new": true,
    "dimensions": {
      "width": "15\"",
      "length": "12\"",
      "depth": "4\""
    },
    "stock": 6,
    "reviews": 1,
    "rating": 5
  },
  {
    "id": 10,
    "name": "Lily Motley Tote Bag",
    "slug": "lily-motley-tote-bag",
    "category": "Tote Bags",
    "price": 3399,
    "salePrice": 1999,
    "discount": 41,
    "images": [
      "https://m.media-amazon.com/images/I/81asdf-82bL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/81asdf-82bL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Upgrade your style with the Lily Motley Tote Bag, perfect for everyday use. This elegant and spacious tote features a beautiful design and is made from high-quality materials for lasting durability.",
    "featured": false,
    "new": true,
    "dimensions": {
      "width": "15\"",
      "length": "12\"",
      "depth": "4\""
    },
    "stock": 8,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 11,
    "name": "Dream Maroon and Black 3 Piece Handbag",
    "slug": "dream-maroon-and-black-3-piece-handbag",
    "category": "Tote Bags",
    "price": 5399,
    "salePrice": 1999,
    "discount": 63,
    "images": [
      "https://m.media-amazon.com/images/I/71QhMbSWXfL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71QhMbSWXfL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Dream Maroon and Black 3 Piece Handbag - A complete set for the modern woman. Includes a large tote bag and two matching accessories. Made from premium materials with elegant two-tone design.",
    "featured": true,
    "new": false,
    "dimensions": {
      "width": "31cm",
      "length": "27cm",
      "depth": "13cm"
    },
    "stock": 20,
    "reviews": 27,
    "rating": 4.5
  },
  {
    "id": 12,
    "name": "Dream White and Pink 3 Piece Handbag",
    "slug": "dream-white-and-pink-3-piece-handbag",
    "category": "Tote Bags",
    "price": 5399,
    "salePrice": 1999,
    "discount": 63,
    "images": [
      "https://m.media-amazon.com/images/I/81xPncCgZLL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/81xPncCgZLL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Dream White and Pink 3 Piece Handbag - A complete set for the modern woman. Includes a large tote bag and two matching accessories. Made from premium materials with elegant two-tone design.",
    "featured": true,
    "new": false,
    "dimensions": {
      "width": "31cm",
      "length": "27cm",
      "depth": "13cm"
    },
    "stock": 15,
    "reviews": 10,
    "rating": 4.2
  },
  {
    "id": 13,
    "name": "Dream White and Brown 3 Piece Handbag",
    "slug": "dream-white-and-brown-3-piece-handbag",
    "category": "Tote Bags",
    "price": 5399,
    "salePrice": 1999,
    "discount": 63,
    "images": [
      "https://m.media-amazon.com/images/I/61-r3qs6rqL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/61-r3qs6rqL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Dream White and Brown 3 Piece Handbag - A complete set for the modern woman. Includes a large tote bag and two matching accessories. Made from premium materials with elegant two-tone design.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "31cm",
      "length": "27cm",
      "depth": "13cm"
    },
    "stock": 10,
    "reviews": 5,
    "rating": 4.0
  },
  {
    "id": 14,
    "name": "Dream White and Black 3 Piece Handbag",
    "slug": "dream-white-and-black-3-piece-handbag",
    "category": "Tote Bags",
    "price": 5399,
    "salePrice": 1999,
    "discount": 63,
    "images": [
      "https://m.media-amazon.com/images/I/61irjgb+7+L._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/61irjgb+7+L._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Dream White and Black 3 Piece Handbag - A complete set for the modern woman. Includes a large tote bag and two matching accessories. Made from premium materials with elegant two-tone design.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "31cm",
      "length": "27cm",
      "depth": "13cm"
    },
    "stock": 12,
    "reviews": 7,
    "rating": 4.3
  },
  {
    "id": 15,
    "name": "Dream Brown and Black 3 Piece Handbag",
    "slug": "dream-brown-and-black-3-piece-handbag",
    "category": "Tote Bags",
    "price": 5399,
    "salePrice": 1999,
    "discount": 63,
    "images": [
      "https://m.media-amazon.com/images/I/71FoHejlDyL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71FoHejlDyL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Dream Brown and Black 3 Piece Handbag - A complete set for the modern woman. Includes a large tote bag and two matching accessories. Made from premium materials with elegant two-tone design.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "31cm",
      "length": "27cm",
      "depth": "13cm"
    },
    "stock": 8,
    "reviews": 9,
    "rating": 4.1
  },
  {
    "id": 16,
    "name": "Versatile T-Pink Tote Bag",
    "slug": "versatile-t-pink-tote-bag",
    "category": "Tote Bags",
    "price": 4999,
    "salePrice": 2299,
    "discount": 54,
    "images": [
      "https://m.media-amazon.com/images/I/61z1B6iPGbL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/61z1B6iPGbL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Versatile T-Pink Tote Bag - The perfect companion for daily use. Spacious interior with multiple compartments to keep your essentials organized. Features durable materials and a stylish pink design.",
    "featured": true,
    "new": false,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "5\""
    },
    "stock": 15,
    "reviews": 14,
    "rating": 4.6
  },
  {
    "id": 17,
    "name": "Versatile Maroon Tote Bag",
    "slug": "versatile-maroon-tote-bag",
    "category": "Tote Bags",
    "price": 4999,
    "salePrice": 2299,
    "discount": 54,
    "images": [
      "https://m.media-amazon.com/images/I/814Qx6K3AuL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/814Qx6K3AuL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Versatile Maroon Tote Bag - The perfect companion for daily use. Spacious interior with multiple compartments to keep your essentials organized. Features durable materials and a stylish maroon design.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "5\""
    },
    "stock": 10,
    "reviews": 5,
    "rating": 4.2
  },
  {
    "id": 18,
    "name": "Versatile Black Tote Bag",
    "slug": "versatile-black-tote-bag",
    "category": "Tote Bags",
    "price": 4999,
    "salePrice": 2299,
    "discount": 54,
    "images": [
      "https://m.media-amazon.com/images/I/71R5wHj-UBL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71R5wHj-UBL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Versatile Black Tote Bag - The perfect companion for daily use. Spacious interior with multiple compartments to keep your essentials organized. Features durable materials and a timeless black design.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "5\""
    },
    "stock": 12,
    "reviews": 8,
    "rating": 4.4
  },
  {
    "id": 19,
    "name": "Versatile Blue Tote Bag",
    "slug": "versatile-blue-tote-bag",
    "category": "Tote Bags",
    "price": 4999,
    "salePrice": 2299,
    "discount": 54,
    "images": [
      "https://m.media-amazon.com/images/I/61Bistb+KaL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/61Bistb+KaL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Versatile Blue Tote Bag - The perfect companion for daily use. Spacious interior with multiple compartments to keep your essentials organized. Features durable materials and a vibrant blue design.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "5\""
    },
    "stock": 15,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 20,
    "name": "Crazy Multi Color Shoulder Bag",
    "slug": "crazy-multi-color-shoulder-bag",
    "category": "Shoulder Bags",
    "price": 4999,
    "salePrice": 1999,
    "discount": 60,
    "images": [
      "https://m.media-amazon.com/images/I/61lq1gEUJpL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/61lq1gEUJpL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Crazy Multi Color Shoulder Bag - Add a pop of color to your outfit with this vibrant multi-colored bag. Perfect for casual outings and a statement piece for your collection.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "12\"",
      "length": "10\"",
      "depth": "4\""
    },
    "stock": 8,
    "reviews": 5,
    "rating": 4.2
  },
  {
    "id": 21,
    "name": "Crazy Brown Shoulder Bag",
    "slug": "crazy-brown-shoulder-bag",
    "category": "Shoulder Bags",
    "price": 4499,
    "salePrice": 1999,
    "discount": 56,
    "images": [
      "https://m.media-amazon.com/images/I/51vCAALrD-L._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/51vCAALrD-L._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Crazy Brown Shoulder Bag - A stylish companion with a unique design. This brown shoulder bag offers both fashion and functionality for everyday use.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "12\"",
      "length": "10\"",
      "depth": "4\""
    },
    "stock": 10,
    "reviews": 4,
    "rating": 4.0
  },
  {
    "id": 22,
    "name": "Point Black and Grey Tote Bags",
    "slug": "point-black-and-grey-tote-bags",
    "category": "Tote Bags",
    "price": 5000,
    "salePrice": 2180,
    "discount": 56,
    "images": [
      "https://m.media-amazon.com/images/I/71Qc1Q7qa8L._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71Qc1Q7qa8L._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Point Black and Grey Tote Bags - Elegant two-tone design in black and grey. This versatile tote bag is perfect for work, shopping, or casual outings.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "15\"",
      "length": "12\"",
      "depth": "4\""
    },
    "stock": 7,
    "reviews": 2,
    "rating": 4.5
  },
  {
    "id": 23,
    "name": "Black Catwalk Tote Bag",
    "slug": "black-catwalk-tote-bag",
    "category": "Tote Bags",
    "price": 4599,
    "salePrice": 2199,
    "discount": 52,
    "images": [
      "https://m.media-amazon.com/images/I/71BzSJ4W7VL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71BzSJ4W7VL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Black Catwalk Tote Bag - Sleek and fashionable, this tote features a glossy finish and crocodile texture. Perfect for fashion-forward individuals who appreciate quality craftsmanship.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "16\"",
      "length": "12\"",
      "depth": "4\""
    },
    "stock": 9,
    "reviews": 3,
    "rating": 4.3
  },
  {
    "id": 24,
    "name": "Trono Black and Skin Tote Bag",
    "slug": "trono-black-and-skin-tote-bag",
    "category": "Tote Bags",
    "price": 4299,
    "salePrice": 2199,
    "discount": 49,
    "images": [
      "https://m.media-amazon.com/images/I/71n1FF-ogQL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71n1FF-ogQL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Trono Black and Skin Tote Bag - A modern two-tone design combining black and neutral skin tone. Spacious interior with multiple compartments for organization.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "15\"",
      "length": "12\"",
      "depth": "4\""
    },
    "stock": 11,
    "reviews": 4,
    "rating": 4.0
  },
  {
    "id": 25,
    "name": "Black Dot Tote Bag",
    "slug": "black-dot-tote-bag",
    "category": "Tote Bags",
    "price": 3999,
    "salePrice": 2399,
    "discount": 40,
    "images": [
      "https://m.media-amazon.com/images/I/71WTbUZGqdL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71WTbUZGqdL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Black Dot Tote Bag - A classic black tote with a unique dotted pattern. Made from high-quality materials, this bag offers both style and durability for daily use.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "4\""
    },
    "stock": 14,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 26,
    "name": "Trono Red and Maroon Tote Bag",
    "slug": "trono-red-and-maroon-tote-bag",
    "category": "Tote Bags",
    "price": 4299,
    "salePrice": 2199,
    "discount": 49,
    "images": [
      "https://m.media-amazon.com/images/I/71+4Jqe3wyL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/71+4Jqe3wyL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Trono Red and Maroon Tote Bag - Bold and beautiful, this two-tone bag combines red and maroon for a striking look. Perfect for adding a pop of color to any outfit.",
    "featured": false,
    "new": false,
    "dimensions": {
      "width": "15\"",
      "length": "12\"",
      "depth": "4\""
    },
    "stock": 7,
    "reviews": 3,
    "rating": 4.3
  },
  {
    "id": 27,
    "name": "Hijab Girl Beige Canvas Tote Bag",
    "slug": "hijab-girl-beige-canvas-tote-bag",
    "category": "Tote Bags",
    "price": 4499,
    "salePrice": 2299,
    "discount": 49,
    "images": [
      "https://m.media-amazon.com/images/I/61AVfaNnjHL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/61AVfaNnjHL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Hijab Girl Beige Canvas Tote Bag – Stylish, Durable & Versatile. Upgrade your everyday carry with our Hijab Girl Beige Canvas Tote Bag, a perfect blend of fashion and function. Made from high-quality, eco-friendly fabric, this tote is designed for durability and style.",
    "featured": true,
    "new": true,
    "dimensions": {
      "width": "14\"",
      "length": "11\"",
      "depth": "4\""
    },
    "stock": 15,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 28,
    "name": "Black Luxury Tote Bag",
    "slug": "black-luxury-tote-bag",
    "category": "Tote Bags",
    "price": 3999,
    "salePrice": 2199,
    "discount": 45,
    "images": [
      "https://m.media-amazon.com/images/I/816xNhRMcCL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/816xNhRMcCL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Experience everyday sophistication with our Black Luxury Tote Bag, perfect for the modern woman on the go. Crafted from durable material, this tote bag features a timeless black checkered design that effortlessly complements any outfit.",
    "featured": true,
    "new": true,
    "dimensions": {
      "width": "16\"",
      "length": "12\"",
      "depth": "3\""
    },
    "stock": 12,
    "reviews": 0,
    "rating": 0
  },
  {
    "id": 29,
    "name": "Lily Asiatic Tote Bag",
    "slug": "lily-asiatic-tote-bag",
    "category": "Tote Bags",
    "price": 3399,
    "salePrice": 1999,
    "discount": 41,
    "images": [
      "https://m.media-amazon.com/images/I/81C710GcdcL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/81C710GcdcL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Shop Lily Asiatic Tote Bag - a stylish and practical accessory for the modern woman. With its elegant design and quality construction, this bag is perfect for daily use or special occasions.",
    "featured": false,
    "new": true,
    "dimensions": {
      "width": "15\"",
      "length": "12\"",
      "depth": "4\""
    },
    "stock": 8,
    "reviews": 2,
    "rating": 4.5
  },
  {
    "id": 30,
    "name": "Molten Caramel Shoulder Bag",
    "slug": "molten-caramel-shoulder-bag",
    "category": "Shoulder Bags",
    "price": 4699,
    "salePrice": 2399,
    "discount": 49,
    "images": [
      "https://m.media-amazon.com/images/I/61zM8ZInhCL._AC_UL640_FMwebp_QL65_.jpg",
    ],
    "thumbnail": "https://m.media-amazon.com/images/I/61zM8ZInhCL._AC_UL640_FMwebp_QL65_.jpg",
    "description": "Indulge in elegance with our spacious Molten Caramel Shoulder Bag. Features include a soft shoulder strap, main zipper compartment, hand pouch/clutch, and a decorative tassel at the front.",
    "featured": true,
    "new": false,
    "dimensions": {
      "width": "16\"",
      "length": "13.5\"",
      "depth": "8\""
    },
    "stock": 10,
    "reviews": 0,
    "rating": 0
  }
]

export default products
