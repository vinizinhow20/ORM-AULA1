import { Router } from "express"
import AuthorController from "./author-controller"

const routes = Router()

routes.post('/authors', new AuthorController().create)

routes.get('/authors', new AuthorController().list)

routes.get('/authors/:id', new AuthorController().show)

routes.put('/authors/:id', new AuthorController().update)

routes.delete('/authors/:id', new AuthorController().delete)

export default routes