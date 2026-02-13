import "dotenv/config";
console.log("DB URL:", process.env.DATABASE_URL ? "Set" : "Unset");
console.log("Session Secret:", process.env.SESSION_SECRET ? "Set" : "Unset");
