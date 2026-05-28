import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.join(process.cwd(), ".env"),
});

const verifyConfig = () => {
    const port = process.env.PORT!;
    const databaseConnectionString = process.env.DATABASE_CONNECTION_STRING!;
    if (!port) throw new Error("PORT is not defined");
    if (!databaseConnectionString)
        throw new Error("DATABASE_CONNECTION_STRING is not defined");
    return {
        port: Number(port),
        databaseConnectionString: databaseConnectionString,
    };
};

export default verifyConfig();
