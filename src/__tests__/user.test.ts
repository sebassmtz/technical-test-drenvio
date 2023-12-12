import supertest from "supertest"
import app from "../app"
// import { MongoMemoryServer } from "mongodb-memory-server";

describe("User", () => {
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

  describe("get user route", () => {
    describe("give me all users", () => {
      it("should return 200", async () => {
        const response = await supertest(app).get("/api/users")
        expect(response.status).toBe(200)
      })
    })
  })

  describe("given the price-special does not exist", () => {
    it("should return a 500", async () => {
      const userId = "6574e80fad7cc19ee4798502"
      const name_brand = "test" // This name brand does not exist

      await supertest(app).get(`/api/price/${userId}/${name_brand}`).expect(500)
    })
  })

  describe("given the price does exist", () => {
    it("should return a 200 status and the product", async () => {
      // @ts-ignore
      const userId = "6574e80f007c15c9b32e534a"
      const name_brand = "Nike"

      const { body, statusCode } = await supertest(app).get(
        `/api/price/${userId}/${name_brand}`
      )

      expect(statusCode).toBe(200)

      expect(body.brand).toBe(name_brand)
    })
  })
})
