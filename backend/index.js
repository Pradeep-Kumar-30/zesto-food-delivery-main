process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION ❌", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION ❌", err);
});

import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";

// ======================
// ENV CONFIG
// ======================
dotenv.config({ override: true });

// ======================
// IMPORTS
// ======================
import connectDb from "./config/db.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import itemRouter from "./routes/item.routes.js";
import shopRouter from "./routes/shop.routes.js";
import orderRouter from "./routes/order.routes.js";

import { socketHandler } from "./socket.js";

// ======================
// APP + SERVER
// ======================
const app = express();
const server = http.createServer(app);

// ======================
// ALLOWED ORIGINS
// ======================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

// ======================
// CORS CONFIG (FIXED)
// ======================
const corsOptions = {
  origin: function (origin, callback) {
    // allow Postman / mobile apps / server-to-server
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.log("🚫 Blocked by CORS:", origin);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Apply CORS
app.use(cors(corsOptions));

// ======================
// SOCKET.IO
// ======================
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

app.set("io", io);

// ======================
// MIDDLEWARES
// ======================
app.use(express.json());
app.use(cookieParser());

// ======================
// ROOT ROUTES
// ======================
app.get("/", (req, res) => {
  res.status(200).send("🚀 Zesto Backend Running Successfully");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy ✅",
  });
});

// ======================
// API ROUTES
// ======================
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/shop", shopRouter);
app.use("/api/item", itemRouter);
app.use("/api/order", orderRouter);

// ======================
// SOCKET HANDLER
// ======================
socketHandler(io);

// ======================
// START SERVER
// ======================
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");

    await connectDb();

    console.log("✅ MongoDB Connected");

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Allowed Origins: ${allowedOrigins.join(", ")}`);
    });
  } catch (error) {
    console.error("❌ SERVER START ERROR");
    console.error(error);
    process.exit(1);
  }
};

startServer();