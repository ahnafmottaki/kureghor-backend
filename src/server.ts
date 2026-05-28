import configProxy from "./config/env.js";
import app from "./app.js";

app.listen(configProxy.port, () => {
    console.log(`Server is running on port ${configProxy.port}`);
});
