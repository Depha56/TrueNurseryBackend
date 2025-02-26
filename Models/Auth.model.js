import pool from "../Db.js";

export const createUser = async (name, email, password, role = "user") => {
    const newUser = await pool.query(
        `INSERT INTO users (name, email, password, role) 
         VALUES ($1, $2, $3, $4) RETURNING id, name, email, role, created_at`,
        [name, email, password, role]
    );
    return newUser.rows[0];
};

export const getUserByEmail = async (email) => {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return user.rows[0];
};

export const getUserById = async (id) => {
    const user = await pool.query("SELECT id, name, email, role, created_at FROM users WHERE id = $1", [id]);
    return user.rows[0];
};
