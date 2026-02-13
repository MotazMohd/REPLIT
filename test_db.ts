import "dotenv/config";
import { pool } from "./server/db";

async function test() {
    try {
        const client = await pool.connect();
        console.log("Connected to DB!");
        client.release();
        process.exit(0);
    } catch (err) {
        console.error("DB Connection Failed:", err);
        process.exit(1);
    }
}
test();
