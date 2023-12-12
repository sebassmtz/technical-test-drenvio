import supertest from "supertest"
import app from "../app"
// import { MongoMemoryServer } from "mongodb-memory-server";

describe("Product", () => {
  /**
   *  This is an example of how to use a mock database
 beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
 */

  describe("get product route", () => {
    describe("when there are products in stock", () => {
      it("should return 200", async () => {
        const response = await supertest(app).get("/api/products")
        expect(response.status).toBe(200)
      })
    })
  })

  describe("given the product does not exist", () => {
    it("should return a 404", async () => {
      const productId = "6574e8c27ee0d120c6119ba1" // This id does not exist

      await supertest(app).get(`/api/products/${productId}`).expect(404)
    })
  })

  describe("given the product does exist", () => {
    it("should return a 200 status and the product", async () => {
      // @ts-ignore
      const productId = "6574e8c27ee0d120c6119aa1"

      const { body, statusCode } = await supertest(app).get(
        `/api/products/${productId}`
      )

      expect(statusCode).toBe(200)

      expect(body._id).toBe(productId)
    })
  })
})
