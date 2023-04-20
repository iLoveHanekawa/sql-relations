import { Router } from 'express'
import { getNames } from '../controllers/hello'

export const helloRouter = Router()

helloRouter.get('/', getNames)