import { Router } from "express"
import productRouter from "./ProductRouter"

const router = Router()

export default function (app: Router): Router {
  /**
   *@openapi
   * components:
   *  schemas:
   *   BadRequest:
   *    type: object
   *    required:
   *     - message
   *    example:
   *      message: error message
   *   GetAllProductsStock:
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
   */
  productRouter(app)

  return router
}
