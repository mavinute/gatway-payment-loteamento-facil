import express from 'express'
import cors from 'cors'

import routes from './routes'

class App {
  constructor() {
    this.server = express()

    this.middlewwares()
    this.routes()
  }

  middlewwares() {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server