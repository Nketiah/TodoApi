"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCookieToken = void 0;
const generateToken_1 = require("./generateToken");
const sendCookieToken = (user, res) => {
    const token = (0, generateToken_1.generateToken)(user.id, "1d");
    const options = {
        //expires: new Date(Date.now() + 60 * 60 * 1000),    1 hour
        //expires: new Date(Date.now() + 30 * 60 * 1000),     30 minutes
        // expires: new Date(Date.now() + 10 * 60 * 1000),     10 minutes
        // expires: new Date(Date.now() + 24 * 60 * 60 * 1000),  1 day
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    res.status(200).cookie('token', token, options).json({
        success: true,
        user: {
            id: user.id,
            fullname: user.fullname,
            role: user.role,
            mobile: user.mobile,
            email: user.email,
            token: token
        }
    });
};
exports.sendCookieToken = sendCookieToken;
