import { Pool } from "pg";
import config from "../config/env.js";

const pool = new Pool({
    connectionString: config.databaseConnectionString,
});

const initializeDb = async () => {
    const creteAdminTable = await pool.query(`
        CREATE TABLE IF NOT EXISTS admins (
            id SERIAL PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`);

    const createUsers = await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            full_name_bangla VARCHAR(255) NOT NULL,
            fathers_name VARCHAR(255) NOT NULL,
            mothers_name VARCHAR(255) NOT NULL,
            present_address VARCHAR(255) NOT NULL,
            permanent_address VARCHAR(255) NOT NULL,
            contact_no VARCHAR(255) NOT NULL,
            guardians_number VARCHAR(255) NOT NULL,
            institution VARCHAR(255) NOT NULL,
            ssc_batch INT,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            profile_pic VARCHAR(255) NOT NULL,
            nid_birth_document VARCHAR(255) NOT NULL,
            blood_group VARCHAR(255) NOT NULL,
            status VARCHAR(255) NOT NULL CHECK(status IN ('active', 'inactive', 'suspended')),
            obligation_start_date TIMESTAMP NOT NULL,
            status_in_foundation VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP
        );
        `);

    const createDonations = await pool.query(`
        CREATE TABLE IF NOT EXISTS donations (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id),
            donation_type VARCHAR(255) NOT NULL CHECK(donation_type IN ('monthly', 'extra')),
            obligation_year INT,
            obligation_month VARCHAR(255),
            amount DECIMAL(10, 2) NOT NULL,
            transaction_id VARCHAR(255),
            payment_method VARCHAR(255) NOT NULL CHECK (payment_method IN ('bkash', 'nagad', 'rocket')),
            status VARCHAR(255) NOT NULL CHECK(status IN ('pending', 'completed', 'rejected')),
            verified_by_admin_id INT REFERENCES admins(id),
            donated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            verified_at TIMESTAMP
        );
`);

    const createAdvisor = await pool.query(`
        CREATE TABLE IF NOT EXISTS advisors (
                    id SERIAL PRIMARY KEY,
                    added_by_admin_id INT REFERENCES admins(id),
                    full_name VARCHAR(255) NOT NULL,
                    full_name_bangla VARCHAR(255) NOT NULL,
                    profession VARCHAR(255) NOT NULL,
                    contact_no VARCHAR(255) NOT NULL,
                    present_address VARCHAR(255) NOT NULL,
                    permanent_address VARCHAR(255) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
                `);

    const createAdvisorsDonations = await pool.query(`
        CREATE TABLE IF NOT EXISTS  advisors_donations (
            id SERIAL PRIMARY KEY,
            advisor_id INT REFERENCES advisors(id),
            added_by_admin_id INT REFERENCES admins(id),
            amount DECIMAL(10, 2) NOT NULL,
            payment_method VARCHAR(255) NOT NULL CHECK (payment_method IN ('bkash', 'nagad', 'rocket')),
            notes VARCHAR(255),
            donation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );


        CREATE TABLE IF NOT EXISTS monthly_obligation_settings (
            id SERIAL PRIMARY KEY,
            minimum_amount DECIMAL(10, 2) NOT NULL,
            currency VARCHAR(3) NOT NULL,
            effective_from TIMESTAMP NOT NULL,
            set_by_admin_id INT REFERENCES admins(id)
        );
        `);
    console.log("Database initialized successfully");
};

export { pool, initializeDb };
