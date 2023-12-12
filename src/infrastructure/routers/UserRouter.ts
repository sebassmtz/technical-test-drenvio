import { Router } from "express"

//Repository
import { UserRepositoryImp } from "../repositories/UserRepositoryImp"

//Use Cases
import { GetUsersUseCase } from "../../application/users/GetUsersUseCase"
import { GetPriceSpecialForUserUseCase } from "../../application/users/GetPriceSpecialForUserUseCase"

//Controllers
import { GetUsersController } from "../controllers/users/GetUsersController"
import { GetPriceSpecialForUserController } from "../controllers/users/GetPriceSpecialForUserController"

export default function userRouter(router: Router): void {
  console.log("User Router")

  //Repository
  const userRepository = new UserRepositoryImp()

  //Use Cases
  const getUsersUseCase = new GetUsersUseCase(userRepository)
  const getPriceSpecialForUserUseCase = new GetPriceSpecialForUserUseCase(
    userRepository
  )

  //Controllers
  const getUsersController = new GetUsersController(getUsersUseCase)
  const getPriceSpecialForUserController = new GetPriceSpecialForUserController(
    getPriceSpecialForUserUseCase
  )

  /**
   * @openapi
   * components:
   *  schemas:
   *    User:
   *       type: object
   *       required:
   *           - _id
   *           - email
   *           - name
   *           - special_price
   *       example:
   *           id: string
   *           email: string
   *           name: string
   *           special_price: string[]
   *    PriceProducts:
   *       type: object
   *       required:
   *           - name
   *           - brand
   *           - special_price
   *       example:
   *           name: string
   *           brand: string
   *           special_price: number (Puede devolver el precio normal si no tiene precio especial)
   *    GetAllUsers:
   *       type: array
   *       items:
   *           $ref: '#components/schemas/User'
   */

  /**
   * @openapi
   * /api/users:
   *  get:
   *     tags:
   *     - Users (Usuarios)
   *     summary: Get all users
   *     responses:
   *       200:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetAllUsers'
   *       400:
   *        description: Bad request
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BadRequest'
   */
  router.get("/api/users", getUsersController.handle.bind(getUsersController))

  /**
   * @openapi
   * /api/price/{user_id}/{product_brand}:
   *  get:
   *     tags:
   *     - Users (Usuarios)
   *     summary: get a price special for user x brand
   *     parameters:
   *      - in: path
   *        name: user_id
   *        required: true
   *        description: user_id
   *      - in: path
   *        name: product_brand
   *        required: true
   *        description: product_brand
   *        schema:
   *          type: string
   *     responses:
   *       201:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/PriceProducts'
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
    "/api/price/:user_id/:product_brand",
    getPriceSpecialForUserController.handle.bind(
      getPriceSpecialForUserController
    )
  )
}
