const express = require('express');
const router = express.Router();
const rootDir = require('../util/path')
const path = require('path')

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get("/login", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'login-page.html'));
});


router.get("/forgot-password", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'forgot-password.html'));
});

module.exports = router;