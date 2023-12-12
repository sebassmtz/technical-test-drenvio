# Challenge-back Drenvio

This repository is a response to a technical test from DRENVÍO, part of the technical interview process. It involves the development of an API using Node.js with Express.js, MongoDB with Mongoose, Swagger for endpoint documentation, and Jest and Supertest for end-to-end tests, all implemented in TypeScript with clean architecture.

## Architecture

### Clean architecture

The project adheres to a clean architecture, a deliberate choice that guarantees the application's robust scalability and simplifies its maintenance. By segregating the business logic from peripheral concerns within the codebase, this architecture ensures a more streamlined and adaptable system. This separation of concerns enables easier management and updates, fostering a more resilient and scalable application.

- **Domain:** Resides the fundamental logic and business rules that define the purpose and essential operation of the application
- **Application:** Application-specific business logic resides
- **Infrastructure:** These are the concrete implementations that allow the application to work (Controllers, Routers and Repositories)
- **Helpers:** Establishes a connection to the MongoDB database and get conf swagger documentation.

## Installation

1. Clone this repository.

   ```bash
   git clone https://github.com/sebassmtz/technical-test-drenvio
   ```

2. Install project dependencies.

   ```bash
   npm i
   ```

3. Configure environment.

configure environment variables in .env file

- **PORT** : port number
- **MONGODB_URI** : mongo db database link

## Project Execution

The environment variables are already configured; you can proceed with the execution.

1. **Execute the project:**

   ```bash
   npm run dev
   ```

2. **Execute tests:**

   ```bash
   npm run test
   ```

## Endpoints

1. **/api/products:** Returns products that are in stock and have more than 1 item available.
2. **/api/products/:id_product:** Return product by id.
3. **/price/:user_id/:product_brand:** Returns products with special prices within sneaker brands that offer discounts to the specific customer or user. If no discount is applicable, it returns products of the specific brand with the base price.
4. **/api/users:** Returns users.
5. **/docs:** Returns the Swagger documentation of the respective API endpoints.

## Deployment

The deployment is done on railway.com

- [Docs](https://technical-test-drenvio-production.up.railway.app/docs/)

## Deployed Endpoints with Examples

- https://technical-test-drenvio-production.up.railway.app/api/products
- https://technical-test-drenvio-production.up.railway.app/api/products/6574e8c27ee0d120c6119aa1
- https://technical-test-drenvio-production.up.railway.app/api/price/6574e80f007c15c9b32e534a/Nike
- https://technical-test-drenvio-production.up.railway.app/api/users

## Use Cases Tests

1. **Customers without brands and without discounts:**

   - User ID: 6574e80fad7cc19ee4798502
   - Brand: Puma

   **Result:**

   ```json
   [
     {
       "name": "Air Force",
       "brand": "Puma",
       "price": 171
     },
     {
       "name": "Zoom",
       "brand": "Puma",
       "price": 127
     }
   ]
   ```

2. **Customers with discount brands:**

   - User ID: 6574e80f007c15c9b32e534a
   - Brand: Nike

   **Result:**

   ```json
   [
     {
       "name": "Zoom",
       "brand": "Nike",
       "special_price": 122
     }
   ]
   ```

## License

[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
