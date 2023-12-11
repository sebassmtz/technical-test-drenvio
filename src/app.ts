import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"

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

const { PORT } = process.env || 3000

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}/`)

  //Routers

  // Swagger docs
  swaggerDocs(app, Number(process.env.PORT))
})
