import { Router } from "express"
import productRouter from "./ProductRouter"
import userRouter from "./UserRouter"

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
   *   NotFound:
   *    type: object
   *    required:
   *      - message
   *    example:
   *      message: Not found
   */
  productRouter(app)
  userRouter(app)

  return router
}
