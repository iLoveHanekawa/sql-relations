import express, { Request, Response } from 'express'
import { helloRouter } from './routers/hello'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello, world!</h1>')
})

app.use('/api/v1', helloRouter)

const port = Number(process.env.PORT) || 3000

const start = (port: number) => {
    app.listen(port, () => {
        console.log(`server listening at: http://localhost:${port}`)
    })
}

start(port)