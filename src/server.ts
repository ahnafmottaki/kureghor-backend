import configProxy from "./config/env.js";
import app from "./app.js";
import config from "./config/env.js";
import { initializeDb } from "./db/index.js";

async function main() {
    await initializeDb();
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
