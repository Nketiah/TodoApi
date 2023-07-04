"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.userLogin = exports.register = void 0;
const emailExist_1 = require("../helpers/emailExist");
const errorHandler_1 = require("../helpers/errorHandler");
const sendCookieToken_1 = require("../helpers/sendCookieToken ");
const validation_1 = require("../helpers/validation");
const prisma_1 = require("../prisma");
// @desc    Register user 
// @route   POST /api/v1/auth/register
// @access  Public
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullname, email, mobile, password, role } = req.body;
        if (!(0, validation_1.validEmail)(email)) {
            return next(res.status(400).json({ message: "Invalid Email" }));
        }
        if (yield (0, emailExist_1.emailExist)(email)) {
            return next(res.status(400).json({ message: "Email already exists" }));
        }
        const user = yield prisma_1.prisma.user.create({
            data: {
                fullname,
                email,
                mobile,
                password,
            }
        });
        (0, sendCookieToken_1.sendCookieToken)(user, res);
    }
    catch (error) {
        (0, errorHandler_1.catchException)(error, res, next);
    }
});
exports.register = register;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //
});
exports.userLogin = userLogin;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //
});
exports.logout = logout;
const name = "";
