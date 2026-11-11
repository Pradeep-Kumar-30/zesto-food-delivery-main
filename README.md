# 🍔 Zesto — Food Delivery App

<div align="center">

![Zesto Banner](https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=900&q=80)

**A full-stack food delivery platform with real-time order tracking, online payments & live delivery assignment.**

[![Node.js](https://img.shields.io/badge/Node.js-v24-green?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-realtime-black?logo=socket.io)](https://socket.io/)
[![Razorpay](https://img.shields.io/badge/Razorpay-payments-blue?logo=razorpay)](https://razorpay.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-images-orange)](https://cloudinary.com/)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Auth** | JWT-based login/signup with OTP password reset |
| 🗺️ **Location Detection** | Auto-detects city via browser Geolocation + Geoapify API |
| 🏪 **Restaurant Discovery** | Browse restaurants & food by city — shows all shops as fallback |
| 🔍 **Search** | Real-time food search across restaurants |
| 🛒 **Cart & Checkout** | Add items to cart, place orders (COD or Online) |
| 💳 **Razorpay Payments** | Secure online payment integration (test + live) |
| 📦 **Order Tracking** | Real-time order status updates via Socket.io |
| 🚴 **Delivery System** | Delivery boy assignment with OTP-based delivery confirmation |
| 🖼️ **Image Upload** | Cloudinary-powered image upload for shop/food items |
| ⭐ **Ratings** | Food item rating system |
| 👑 **Owner Dashboard** | Restaurant owners can manage shop, menu & orders |
| 🛵 **Delivery Dashboard** | Delivery boys can accept/complete delivery assignments |

---

## 🏗️ Tech Stack

### Backend
- **Runtime:** Node.js v24 + Express.js v5
- **Database:** MongoDB Atlas + Mongoose
- **Auth:** JWT + bcryptjs + HTTP-only cookies
- **Real-time:** Socket.io
- **Payments:** Razorpay
- **Images:** Cloudinary + Multer
- **Email:** Nodemailer (Gmail)

### Frontend
- **Framework:** React 19 + Vite
- **State:** Redux Toolkit
- **Routing:** React Router v7
- **Maps:** Geoapify Geocoding API
- **Auth:** Firebase (Google OAuth)
- **HTTP:** Axios
- **Styling:** Tailwind CSS v4

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Razorpay account (test mode)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/zesto-food-delivery.git
cd zesto-food-delivery
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in `/backend`:

```env
NODE_ENV=development
PORT=8000
FRONTEND_URL=http://localhost:5173

# MongoDB
MONGODB_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/zesto

# Auth
JWT_SECRET=your_super_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
RAZORPAY_KEY_SECRET=your_key_secret

# Email (optional)
EMAIL=your@gmail.com
PASS=your_app_password

COOKIE_SECURE=false
COOKIE_SAME_SITE=lax
COOKIE_DOMAIN=
```

### 3. Seed the Database

```bash
cd backend
node seed.js
```

This adds **12 restaurants** and **56+ food items** across **7 cities** (Sabour, Mumbai, Bangalore, Delhi, Pune, Hyderabad, Chennai).

### 4. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file in `/frontend`:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_GEOAPIKEY=your_geoapify_key
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
VITE_API_URL=http://localhost:8000
```

### 5. Start Development Servers

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
```

**App:** [http://localhost:5173](http://localhost:5173)
**API:** [http://localhost:8000](http://localhost:8000)

---

## 🗄️ Database Seed Data

After running `node seed.js`, the following demo data is available:

| City | Restaurants | Speciality |
|------|------------|------------|
| **Sabour** | Spice Garden, Bihar Chaat Corner | North Indian, Chaat |
| **Mumbai** | Mumbai Chaat House, Spice Garden Mumbai | Chaat, North Indian |
| **Bangalore** | Dosa Plaza, The Sandwich Co. | South Indian, Sandwiches |
| **Delhi** | Dragon Palace, Delhi Pizza Hub | Chinese, Pizza |
| **Pune** | Burger Barn Pune | Burgers |
| **Hyderabad** | Hyderabad Biryani House | Biryani, Main Course |
| **Chennai** | Sweet Cravings, South Indian Delight | Desserts, South Indian |

> All seeded owner accounts use password: `zesto@1234`

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/signin` | Login |
| GET | `/api/auth/signout` | Logout |
| POST | `/api/auth/forgot-password` | Send OTP |
| POST | `/api/auth/verify-otp` | Verify OTP |
| POST | `/api/auth/reset-password` | Reset password |

### Shops
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/shop/get-by-city/:city` | Get shops by city (use "all" for all shops) |
| GET | `/api/shop/get-all` | Get all shops |
| GET | `/api/shop/get-my` | Get owner's shop |
| POST | `/api/shop/create-edit` | Create or edit shop |

### Items
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/item/get-by-city/:city` | Get items by city |
| GET | `/api/item/get-by-shop/:shopId` | Get items by shop |
| GET | `/api/item/search-items?query=&city=` | Search food items |
| POST | `/api/item/add` | Add food item |
| PUT | `/api/item/edit/:itemId` | Edit food item |
| DELETE | `/api/item/delete/:itemId` | Delete food item |
| POST | `/api/item/rating` | Rate an item |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/order/place` | Place an order |
| POST | `/api/order/verify-payment` | Verify Razorpay payment |
| GET | `/api/order/my-orders` | Get user/owner orders |
| PATCH | `/api/order/update-status/:orderId/:shopId` | Update order status |
| GET | `/api/order/get-assignment` | Get delivery assignment |
| PATCH | `/api/order/accept/:assignmentId` | Accept delivery |

---

## 🔄 Order Flow

```
User Places Order
      ↓
  COD / Online (Razorpay)
      ↓
Owner Dashboard (real-time via Socket.io)
      ↓
Owner: Preparing → Out for Delivery
      ↓
Nearby Delivery Boys Notified (within 5km)
      ↓
Delivery Boy Accepts Assignment
      ↓
Delivery OTP sent to User's Email
      ↓
OTP Verified → Order Delivered ✅
```

---

## 📱 User Roles

| Role | Capabilities |
|------|-------------|
| **user** | Browse restaurants, order food, track orders, rate items |
| **owner** | Manage shop & menu, view & manage orders, assign delivery |
| **deliveryBoy** | View assignments, accept orders, deliver with OTP verification |

---

## 🌐 Deployment

Refer to `render.yaml` for Render deployment configuration.

```yaml
# render.yaml is pre-configured for Render.com
# Set environment variables in Render dashboard
```

---

## 📸 Screenshots

> The app auto-detects your location and shows restaurants in your city.
> If location permission is denied, it shows **all restaurants** as a fallback.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Pradeep** — Full Stack Developer

> Built with ❤️ using the MERN stack + Socket.io + Razorpay

---

## 📄 License

MIT License — feel free to use this project for learning or portfolio purposes.
