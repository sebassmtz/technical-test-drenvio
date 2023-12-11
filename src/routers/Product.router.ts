import { Router } from "express"

import { ProductsController } from "../infrastructure/controllers/ProductController"

import { GetStockProducts } from "../application/GetStockProducts"

import { ProductRepositoryImp } from "../infrastructure/repositories/ProductRepositoryImp"

const router = Router()

const productRepository = new ProductRepositoryImp()

const getStockProducts = new GetStockProducts(productRepository)

const productsController = new ProductsController(getStockProducts)


router.get("/products", productsController.handle.bind(productsController))

router.get("/", (req, res) => {
  res.json({ message: "Products UWU" })
})

export default router
