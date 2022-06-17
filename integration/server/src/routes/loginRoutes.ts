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
                <input required name="email" />
            </div>
            <div>
                <label>Password</label>
                <input required name="password" type="password"/>
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

router.get("/", (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `)
    } else {
        res.send(`
            <div>
                <div>You are not logged in</div>
                <a href="/login">Login</a>
            </div>
        `)
    }
})

router.get("/logout", (req: Request, res: Response) => {
    req.session = undefined
    res.redirect("/")
})

export { router }