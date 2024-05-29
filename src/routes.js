import { Router } from 'express'

import CartsController from './controllers/CartsController'
import TransactionsController from './controllers/TransactionsController'
import TransactionsPixController from './controllers/TransactionsPixController'

const routes = new Router()

routes.get("/carts", CartsController.index)
routes.post("/cart", CartsController.create)

routes.post("/transaction", TransactionsController.create)
routes.post("/transaction-pix", TransactionsPixController.create)

export default routes