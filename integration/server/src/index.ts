import express, { Request, Response } from 'express'
import bodyParser from "body-parser";
import cookieSession from 'cookie-session'

import { router } from './routes/loginRoutes'

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['jio'] }))
app.use(router)

app.listen(3000, () => {
    console.log("Server started running on 3000!")
})