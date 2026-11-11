import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

import Shop from "./models/shop.model.js";
import User from "./models/user.model.js";

async function updateCities() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Connected\n");

    // Find all seeded owner emails
    const seededEmails = [
      "ramesh@zesto.com", "suresh@zesto.com", "anjali@zesto.com",
      "vikram@zesto.com", "priya@zesto.com", "ravi@zesto.com",
      "deepa@zesto.com", "arjun@zesto.com"
    ];

    const owners = await User.find({ email: { $in: seededEmails } });
    const ownerIds = owners.map(o => o._id);

    const result = await Shop.updateMany(
      { owner: { $in: ownerIds } },
      { $set: { city: "Sabour", state: "Bihar" } }
    );

    console.log(`✅ Updated ${result.modifiedCount} shops → city: "Sabour", state: "Bihar"`);

    // Show updated shops
    const shops = await Shop.find({ owner: { $in: ownerIds } }, "name city state");
    shops.forEach(s => console.log(`   📍 ${s.name} → ${s.city}, ${s.state}`));

  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("\n✅ Done!");
    process.exit(0);
  }
}

updateCities();
