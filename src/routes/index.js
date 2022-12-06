const express = require("express");

// importing routes dependencies
const routes = express.Router();

// importing controller
const ProductsController = require("../controllers/ProductsController");

routes.get("/", (req, res) => res.send(`<h1>Hello World</h1>`));

// listing all products
routes.get("/listingProducts", ProductsController.listProducts);

// listing only the choose products
routes.get("/listingProducts/:id", ProductsController.listChooseProduct);

// deletig products
routes.delete("/deleteProducts/:id", ProductsController.delProducts);

// posting products
routes.post("/postingProducts", ProductsController.postProducts);

// updating products
routes.put("/updatingProducts", ProductsController.upProducts);

module.exports = routes;