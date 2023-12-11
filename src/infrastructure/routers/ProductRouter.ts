import { Router } from "express"

import { ProductsController } from "../controllers/ProductController"

import { GetStockProducts } from "../../application/GetStockProducts"

import { ProductRepositoryImp } from "../repositories/ProductRepositoryImp"

export default function productRouter(router: Router): void {
  console.log("Product Router")

  const productRepository = new ProductRepositoryImp()
  const getStockProducts = new GetStockProducts(productRepository)
  const productsController = new ProductsController(getStockProducts)

  /**
   * @openapi
   * /api/products:
   *  get:
   *     tags:
   *     - Products (Producto)
   *     summary: Get All Products with stock
   *     responses:
   *       200:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetAllProductsStock'
   *       400:
   *        description: Bad request
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BadRequest'
   */
  router.get(
    "/api/products",
    productsController.handle.bind(productsController)
  )
}
