import { Router } from "express"

// Repository
import { ProductRepositoryImp } from "../repositories/ProductRepositoryImp"

// Use Cases
import { FindProductUseCase } from "../../application/products/FindProductUseCase"
import { GetStockProductsUseCase } from "../../application/products/GetStockProductsUseCase"

// Controllers
import { GetStockProductsController } from "../controllers/products/GetStockProductsController"
import { FindProductController } from "../controllers/products/FindProductController"

export default function productRouter(router: Router): void {
  console.log("Product Router")

  // Repository
  const productRepository = new ProductRepositoryImp()

  // Use Cases
  const getStockProductsUseCase = new GetStockProductsUseCase(productRepository)
  const findProductUseCase = new FindProductUseCase(productRepository)

  // Controllers
  const getStockProductsController = new GetStockProductsController(
    getStockProductsUseCase
  )
  const findProductController = new FindProductController(findProductUseCase)

  /**
   *@openapi
   * components:
   *  schemas:
   *   Product:
   *    type: object
   *    required:
   *     - _id
   *     - name
   *     - price
   *     - brand
   *     - stock
   *     - special_price
   *    example:
   *      _id: string
   *      name: string
   *      price: number
   *      brand: string
   *      stock: number
   *      special_price: string
   *   GetAllProducts:
   *    type: array
   *    items:
   *      $ref: '#components/schemas/Product'
   */

  /**
   * @openapi
   * /api/products:
   *  get:
   *     tags:
   *     - Products (Productos)
   *     summary: Get  Product by ID
   *     responses:
   *       200:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetAllProducts'
   *       400:
   *        description: Bad request
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BadRequest'
   */
  router.get(
    "/api/products",
    getStockProductsController.handle.bind(getStockProductsController)
  )

  /**
   * @openapi
   * /api/products/{id}:
   *  get:
   *     tags:
   *     - Products (Productos)
   *     summary: get a product by id
   *     parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: product id
   *        schema:
   *          type: string
   *     responses:
   *       201:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Product'
   *       400:
   *        description: Bad request
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BadRequest'
   *       404:
   *        description: Not found
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/NotFound'
   */
  router.get(
    "/api/products/:id",
    findProductController.handle.bind(findProductController)
  )
}
