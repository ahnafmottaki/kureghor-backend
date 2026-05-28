import app from "./app.js";
import config from "./config/env.js";
import { initializeDb } from "./db/index.js";
import { authService } from "./modules/auth/auth.service.js";

async function main() {
    await initializeDb();
    await authService.createAdmin();
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
}

main().catch((err) => {
    console.log("hello error");
    process.exit(1);
});
