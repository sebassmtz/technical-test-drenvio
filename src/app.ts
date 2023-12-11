import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"

import router from "./routers/Product.router"

import { connectDB } from "./helpers/Database"

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

app.use("/", router)

const { PORT, MONGODB_URI } = process.env

connectDB(MONGODB_URI as string)
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}/`)
})

export default app
