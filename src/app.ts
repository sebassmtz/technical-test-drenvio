import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"

import router from "./infrastructure/routers/IndexRouter"

import { connectDB } from "./helpers/Database"
import swaggerDocs from "./helpers/Swagger"

const app = express()

dotenv.config()

app.use(
  cors({
    credentials: true,
  })
)

app.use(morgan("dev"))
app.use(compression())
app.use(bodyParser.json())

const { PORT, MONGODB_URI } = process.env

app.listen(PORT, () => {
  connectDB(MONGODB_URI as string)
  console.log(`server running on http://localhost:${PORT}/`)
  router(app)
  swaggerDocs(app, Number(PORT))
})

export default app
