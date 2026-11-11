import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

import User from "./models/user.model.js";
import Shop from "./models/shop.model.js";
import Item from "./models/item.model.js";

const ownersData = [
  // Sabour owners (8)
  { fullName: "Ramesh Sharma",    email: "ramesh@zesto.com",    mobile: "9876543210", role: "owner" },
  { fullName: "Suresh Patel",     email: "suresh@zesto.com",    mobile: "9876543211", role: "owner" },
  { fullName: "Anjali Mehta",     email: "anjali@zesto.com",    mobile: "9876543212", role: "owner" },
  { fullName: "Vikram Singh",     email: "vikram@zesto.com",    mobile: "9876543213", role: "owner" },
  { fullName: "Priya Nair",       email: "priya@zesto.com",     mobile: "9876543214", role: "owner" },
  { fullName: "Ravi Kumar",       email: "ravi@zesto.com",      mobile: "9876543215", role: "owner" },
  { fullName: "Deepa Reddy",      email: "deepa@zesto.com",     mobile: "9876543216", role: "owner" },
  { fullName: "Arjun Joshi",      email: "arjun@zesto.com",     mobile: "9876543217", role: "owner" },
  // Other cities (8)
  { fullName: "Meera Iyer",       email: "meera@zesto.com",     mobile: "9876543218", role: "owner" },
  { fullName: "Kabir Khan",       email: "kabir@zesto.com",     mobile: "9876543219", role: "owner" },
  { fullName: "Sunita Verma",     email: "sunita@zesto.com",    mobile: "9876543220", role: "owner" },
  { fullName: "Rohit Gupta",      email: "rohit@zesto.com",     mobile: "9876543221", role: "owner" },
  { fullName: "Neha Singh",       email: "neha@zesto.com",      mobile: "9876543222", role: "owner" },
  { fullName: "Amar Verma",       email: "amar@zesto.com",      mobile: "9876543223", role: "owner" },
  { fullName: "Pooja Sharma",     email: "pooja@zesto.com",     mobile: "9876543224", role: "owner" },
  { fullName: "Sanjay Patel",     email: "sanjay@zesto.com",    mobile: "9876543225", role: "owner" },
];

const shopsData = [

  // ════════════════════════════════════════════════════════
  //  SABOUR  (8 restaurants — sab kuch yahan milega!)
  // ════════════════════════════════════════════════════════

  {
    name: "Spice Garden", city: "Sabour", state: "Bihar",
    address: "Main Road, Sabour, Bhagalpur - 813210",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    ownerIdx: 0,
    items: [
      { name: "Butter Chicken",        category: "North Indian", foodType: "non veg", price: 320, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
      { name: "Dal Makhani",           category: "North Indian", foodType: "veg",     price: 220, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
      { name: "Paneer Tikka Masala",   category: "North Indian", foodType: "veg",     price: 280, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
      { name: "Chicken Biryani",       category: "Main Course",  foodType: "non veg", price: 350, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80" },
      { name: "Garlic Naan",           category: "North Indian", foodType: "veg",     price: 60,  image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80" },
      { name: "Shahi Paneer",          category: "North Indian", foodType: "veg",     price: 260, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80" },
    ],
  },

  {
    name: "Bihar Chaat Corner", city: "Sabour", state: "Bihar",
    address: "College Road, Sabour - 813210",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    ownerIdx: 1,
    items: [
      { name: "Pani Puri (10pcs)",     category: "Snacks",       foodType: "veg",     price: 60,  image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
      { name: "Aloo Chaat",            category: "Snacks",       foodType: "veg",     price: 70,  image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400&q=80" },
      { name: "Samosa (2pcs)",         category: "Snacks",       foodType: "veg",     price: 30,  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
      { name: "Litti Chokha",          category: "Main Course",  foodType: "veg",     price: 100, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
      { name: "Dahi Bhalla",           category: "Snacks",       foodType: "veg",     price: 60,  image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
      { name: "Bhel Puri",             category: "Snacks",       foodType: "veg",     price: 50,  image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400&q=80" },
    ],
  },

  {
    name: "Sabour Pizza Hub", city: "Sabour", state: "Bihar",
    address: "Market Road, Sabour, Bhagalpur - 813210",
    image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=800&q=80",
    ownerIdx: 2,
    items: [
      { name: "Margherita Pizza",      category: "Pizza",        foodType: "veg",     price: 249, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
      { name: "Pepperoni Pizza",       category: "Pizza",        foodType: "non veg", price: 349, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
      { name: "BBQ Chicken Pizza",     category: "Pizza",        foodType: "non veg", price: 399, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80" },
      { name: "Veggie Supreme Pizza",  category: "Pizza",        foodType: "veg",     price: 299, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" },
      { name: "Cheese Burst Pizza",    category: "Pizza",        foodType: "veg",     price: 329, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80" },
    ],
  },

  {
    name: "Dragon Wok — Chinese", city: "Sabour", state: "Bihar",
    address: "Station Road, Sabour - 813210",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    ownerIdx: 3,
    items: [
      { name: "Veg Fried Rice",        category: "Chinese",      foodType: "veg",     price: 150, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80" },
      { name: "Chicken Hakka Noodles", category: "Chinese",      foodType: "non veg", price: 190, image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80" },
      { name: "Veg Manchurian",        category: "Chinese",      foodType: "veg",     price: 160, image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80" },
      { name: "Spring Rolls (6pcs)",   category: "Chinese",      foodType: "veg",     price: 120, image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&q=80" },
      { name: "Chilli Paneer",         category: "Chinese",      foodType: "veg",     price: 180, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80" },
      { name: "Hot & Sour Soup",       category: "Chinese",      foodType: "veg",     price: 100, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
    ],
  },

  {
    name: "Burger Point Sabour", city: "Sabour", state: "Bihar",
    address: "NH-80, Near Bus Stand, Sabour - 813210",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    ownerIdx: 4,
    items: [
      { name: "Classic Burger",        category: "Burgers",      foodType: "non veg", price: 149, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
      { name: "Double Cheese Burger",  category: "Burgers",      foodType: "non veg", price: 199, image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80" },
      { name: "Crispy Veg Burger",     category: "Burgers",      foodType: "veg",     price: 119, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80" },
      { name: "Spicy Chicken Burger",  category: "Burgers",      foodType: "non veg", price: 179, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80" },
      { name: "Vada Pav",              category: "Fast Food",    foodType: "veg",     price: 30,  image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80" },
    ],
  },

  {
    name: "Dosa & More", city: "Sabour", state: "Bihar",
    address: "Opposite BAC Gate, Sabour - 813210",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    ownerIdx: 5,
    items: [
      { name: "Masala Dosa",           category: "South Indian", foodType: "veg",     price: 100, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80" },
      { name: "Idli Sambar (4pcs)",    category: "South Indian", foodType: "veg",     price: 70,  image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80" },
      { name: "Medu Vada (2pcs)",      category: "South Indian", foodType: "veg",     price: 60,  image: "https://images.unsplash.com/photo-1610191578267-0b3cbfc9d921?w=400&q=80" },
      { name: "Uttapam",               category: "South Indian", foodType: "veg",     price: 90,  image: "https://images.unsplash.com/photo-1567188040759-fb8a254b6756?w=400&q=80" },
      { name: "Rava Dosa",             category: "South Indian", foodType: "veg",     price: 100, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80" },
    ],
  },

  {
    name: "Sweet Bites Sabour", city: "Sabour", state: "Bihar",
    address: "Near Sabour Chowk, Bhagalpur - 813210",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    ownerIdx: 6,
    items: [
      { name: "Gulab Jamun (4pcs)",    category: "Desserts",     foodType: "veg",     price: 60,  image: "https://images.unsplash.com/photo-1601303516534-bf51b0bc3e45?w=400&q=80" },
      { name: "Chocolate Cake Slice",  category: "Desserts",     foodType: "veg",     price: 120, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" },
      { name: "Rasgulla (6pcs)",       category: "Desserts",     foodType: "veg",     price: 80,  image: "https://images.unsplash.com/photo-1601303516534-bf51b0bc3e45?w=400&q=80" },
      { name: "Mango Ice Cream",       category: "Desserts",     foodType: "veg",     price: 80,  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" },
      { name: "Brownie",               category: "Desserts",     foodType: "veg",     price: 100, image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80" },
      { name: "Kulfi",                 category: "Desserts",     foodType: "veg",     price: 50,  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" },
    ],
  },

  {
    name: "The Sandwich Stop", city: "Sabour", state: "Bihar",
    address: "BAC Road, Sabour, Bhagalpur - 813210",
    image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=800&q=80",
    ownerIdx: 7,
    items: [
      { name: "Club Sandwich",         category: "Sandwiches",   foodType: "non veg", price: 150, image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=400&q=80" },
      { name: "Grilled Veg Sandwich",  category: "Sandwiches",   foodType: "veg",     price: 100, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" },
      { name: "Paneer Tikka Sandwich", category: "Sandwiches",   foodType: "veg",     price: 130, image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&q=80" },
      { name: "Egg Sandwich",          category: "Sandwiches",   foodType: "non veg", price: 100, image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=400&q=80" },
      { name: "Cold Coffee",           category: "Others",       foodType: "veg",     price: 80,  image: "https://images.unsplash.com/photo-1517959105821-ecd8b2b01943?w=400&q=80" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  MUMBAI
  // ════════════════════════════════════════════════════════
  {
    name: "Mumbai Chaat House", city: "Mumbai", state: "Maharashtra",
    address: "15, Linking Road, Bandra West, Mumbai - 400050",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    ownerIdx: 8,
    items: [
      { name: "Pani Puri (10pcs)",     category: "Snacks",       foodType: "veg",     price: 60,  image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
      { name: "Bhel Puri",             category: "Snacks",       foodType: "veg",     price: 70,  image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400&q=80" },
      { name: "Vada Pav",              category: "Snacks",       foodType: "veg",     price: 30,  image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80" },
      { name: "Sev Puri",              category: "Snacks",       foodType: "veg",     price: 60,  image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
      { name: "Butter Chicken",        category: "North Indian", foodType: "non veg", price: 320, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  BANGALORE
  // ════════════════════════════════════════════════════════
  {
    name: "Dosa Plaza Bangalore", city: "Bangalore", state: "Karnataka",
    address: "45, Indiranagar 100ft Road, Bangalore - 560038",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    ownerIdx: 9,
    items: [
      { name: "Masala Dosa",           category: "South Indian", foodType: "veg",     price: 120, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80" },
      { name: "Idli Sambar (4pcs)",    category: "South Indian", foodType: "veg",     price: 80,  image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80" },
      { name: "Uttapam",               category: "South Indian", foodType: "veg",     price: 100, image: "https://images.unsplash.com/photo-1567188040759-fb8a254b6756?w=400&q=80" },
      { name: "Club Sandwich",         category: "Sandwiches",   foodType: "non veg", price: 180, image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=400&q=80" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  DELHI
  // ════════════════════════════════════════════════════════
  {
    name: "Dragon Palace Delhi", city: "Delhi", state: "Delhi",
    address: "78, Connaught Place, New Delhi - 110001",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    ownerIdx: 10,
    items: [
      { name: "Veg Fried Rice",        category: "Chinese",      foodType: "veg",     price: 160, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80" },
      { name: "Chicken Hakka Noodles", category: "Chinese",      foodType: "non veg", price: 200, image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80" },
      { name: "Margherita Pizza",      category: "Pizza",        foodType: "veg",     price: 299, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
      { name: "Butter Chicken",        category: "North Indian", foodType: "non veg", price: 340, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
      { name: "Chilli Chicken",        category: "Chinese",      foodType: "non veg", price: 240, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  PUNE
  // ════════════════════════════════════════════════════════
  {
    name: "Burger Barn Pune", city: "Pune", state: "Maharashtra",
    address: "56, FC Road, Shivajinagar, Pune - 411005",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    ownerIdx: 11,
    items: [
      { name: "Classic Burger",        category: "Burgers",      foodType: "non veg", price: 199, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
      { name: "Double Cheese Burger",  category: "Burgers",      foodType: "non veg", price: 249, image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80" },
      { name: "Veggie Burger",         category: "Burgers",      foodType: "veg",     price: 149, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80" },
      { name: "Margherita Pizza",      category: "Pizza",        foodType: "veg",     price: 299, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  HYDERABAD
  // ════════════════════════════════════════════════════════
  {
    name: "Hyderabad Biryani House", city: "Hyderabad", state: "Telangana",
    address: "12, Banjara Hills Road No.1, Hyderabad - 500034",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    ownerIdx: 12,
    items: [
      { name: "Hyderabadi Dum Biryani",category: "Main Course",  foodType: "non veg", price: 380, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80" },
      { name: "Veg Biryani",           category: "Main Course",  foodType: "veg",     price: 280, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
      { name: "Haleem",                category: "Main Course",  foodType: "non veg", price: 200, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
      { name: "Double Ka Meetha",      category: "Desserts",     foodType: "veg",     price: 120, image: "https://images.unsplash.com/photo-1601303516534-bf51b0bc3e45?w=400&q=80" },
      { name: "Mirchi Ka Salan",       category: "Main Course",  foodType: "veg",     price: 160, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  CHENNAI
  // ════════════════════════════════════════════════════════
  {
    name: "South Indian Delight Chennai", city: "Chennai", state: "Tamil Nadu",
    address: "9, Anna Salai, T. Nagar, Chennai - 600017",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    ownerIdx: 13,
    items: [
      { name: "Masala Dosa",           category: "South Indian", foodType: "veg",     price: 100, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80" },
      { name: "Chettinad Chicken",     category: "Main Course",  foodType: "non veg", price: 320, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
      { name: "Gulab Jamun (4pcs)",    category: "Desserts",     foodType: "veg",     price: 80,  image: "https://images.unsplash.com/photo-1601303516534-bf51b0bc3e45?w=400&q=80" },
      { name: "Idli Sambar (4pcs)",    category: "South Indian", foodType: "veg",     price: 70,  image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80" },
      { name: "Chocolate Lava Cake",   category: "Desserts",     foodType: "veg",     price: 150, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  KOLKATA
  // ════════════════════════════════════════════════════════
  {
    name: "Kolkata Street Kitchen", city: "Kolkata", state: "West Bengal",
    address: "Park Street, Kolkata - 700016",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    ownerIdx: 14,
    items: [
      { name: "Kathi Roll (Chicken)",  category: "Fast Food",    foodType: "non veg", price: 120, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80" },
      { name: "Puchka (Pani Puri)",    category: "Snacks",       foodType: "veg",     price: 50,  image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
      { name: "Mishti Doi",            category: "Desserts",     foodType: "veg",     price: 60,  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" },
      { name: "Butter Chicken",        category: "North Indian", foodType: "non veg", price: 300, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  JAIPUR
  // ════════════════════════════════════════════════════════
  {
    name: "Rajputana Dhaba", city: "Jaipur", state: "Rajasthan",
    address: "MI Road, Jaipur - 302001",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    ownerIdx: 15,
    items: [
      { name: "Dal Baati Churma",      category: "Main Course",  foodType: "veg",     price: 180, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
      { name: "Laal Maas",             category: "Main Course",  foodType: "non veg", price: 350, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
      { name: "Pyaaz Kachori",         category: "Snacks",       foodType: "veg",     price: 40,  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
      { name: "Ghewar",                category: "Desserts",     foodType: "veg",     price: 120, image: "https://images.unsplash.com/photo-1601303516534-bf51b0bc3e45?w=400&q=80" },
      { name: "Butter Chicken",        category: "North Indian", foodType: "non veg", price: 310, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
    ],
  },

];

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function seed() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB Connected\n");

    console.log("🗑️  Clearing old seeded data...");
    const seededEmails = ownersData.map((o) => o.email);
    const seededOwners = await User.find({ email: { $in: seededEmails } });
    const seededOwnerIds = seededOwners.map((o) => o._id);

    if (seededOwnerIds.length > 0) {
      const seededShops = await Shop.find({ owner: { $in: seededOwnerIds } });
      const seededShopIds = seededShops.map((s) => s._id);
      if (seededShopIds.length > 0) {
        await Item.deleteMany({ shop: { $in: seededShopIds } });
        await Shop.deleteMany({ _id: { $in: seededShopIds } });
      }
      await User.deleteMany({ _id: { $in: seededOwnerIds } });
    }
    console.log("✅ Old seed data cleared\n");

    console.log("👤 Creating owner users...");
    const hashedPass = await bcrypt.hash("zesto@1234", 10);
    const createdOwners = [];
    for (const ownerData of ownersData) {
      const owner = await User.create({ ...ownerData, password: hashedPass });
      createdOwners.push(owner);
    }
    console.log(`✅ ${createdOwners.length} owners created\n`);

    console.log("🏪 Creating shops and food items...\n");
    let totalItems = 0;
    const cityCounts = {};
    for (const shopData of shopsData) {
      const { items, ownerIdx, ...shopFields } = shopData;
      const owner = createdOwners[ownerIdx];
      const shop = await Shop.create({ ...shopFields, owner: owner._id });
      const itemIds = [];
      for (const itemData of items) {
        const item = await Item.create({ ...itemData, shop: shop._id });
        itemIds.push(item._id);
      }
      shop.items = itemIds;
      await shop.save();
      totalItems += itemIds.length;
      cityCounts[shop.city] = (cityCounts[shop.city] || 0) + 1;
      console.log(`   🏪 ${shop.name} (${shop.city}) — ${itemIds.length} items`);
    }

    console.log("\n🎉 Seeding Complete!");
    console.log("═══════════════════════════════════════════════════════");
    console.log(`✅ ${ownersData.length} Owners created`);
    console.log(`✅ ${shopsData.length} Shops created`);
    console.log(`✅ ${totalItems} Food Items created`);
    console.log("\n🏙️  Shops per city:");
    Object.entries(cityCounts).forEach(([city, count]) => {
      console.log(`   📍 ${city}: ${count} restaurant${count > 1 ? "s" : ""}`);
    });
    console.log("═══════════════════════════════════════════════════════");
    console.log("\n🔑 All owner accounts password: zesto@1234");
  } catch (err) {
    console.error("❌ Seed Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("\n🔌 Done!");
    process.exit(0);
  }
}

seed();
