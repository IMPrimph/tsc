// captial file name means we are exporting the class
// so we used smaller case

import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if(req.session && req.session.loggedIn) {
        next()
        return
    }

    res.status(403)
    res.send("Not permitted")
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

router.get("/protected", requireAuth, (req: Request, res: Response) => {
    res.send("Welcome to protected route, logged in user")
})

router.get("/logout", (req: Request, res: Response) => {
    req.session = undefined
    res.redirect("/")
})

export { router }