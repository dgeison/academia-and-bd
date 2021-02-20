const { PrecompiledLoader } = require("nunjucks");
const { Pool } = require("pg");

// Poll conecta uma unica vez no banco! 

module.exports = new Pool({
    user: 'postgres',
    password: "1231",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})