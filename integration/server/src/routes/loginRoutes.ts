// captial file name means we are exporting the class
// so we used smaller case

import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

const router = Router()

router.get("/login", (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password"/>
            </div>
            <button>Submit</button>
        </form>
    `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body

    if (email && password && email === 'email' && password === 'pass') {
        // mark the user as logged in
        req.session = { loggedIn: true }
        // redirect them to the root route
        res.redirect("/")
    } else {
        res.send("Invalid email")
    }
})

export { router }