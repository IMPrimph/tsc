"use strict";
// captial file name means we are exporting the class
// so we used smaller case
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/login", (req, res) => {
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
    `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'email' && password === 'pass') {
        // mark the user as logged in
        req.session = { loggedIn: true };
        // redirect them to the root route
        res.redirect("/");
    }
    else {
        res.send("Invalid email");
    }
});
