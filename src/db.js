const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "",
      database: "products",
    },
  
    pool: {
      min: 2,
      max: 8,
    },
  });
  
  knex.schema
    .createTableIfNotExists("prods", (table) => {
      table.increments("id").primary();
      table.string("title", 128);
      table.integer("price");
      table.string("thumbnail");
    })
  
    .then(() => {
      console.log("Tabla de productos creada");
    })
    .catch((err) => {
      console.log(err);
    });
  
  module.exports = knex;