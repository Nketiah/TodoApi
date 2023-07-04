"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchException = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const library_1 = require("@prisma/client/runtime/library");
// 0597484708
const catchException = (error, res, next) => {
    console.error("Error: ", error);
    if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
        return next(res.status(401).json({ message: "Invalid JWT" }));
    }
    else if (error instanceof library_1.PrismaClientKnownRequestError) {
        return next(res.status(400).json({ message: "Database error occurred" }));
    }
    else {
        return next(res.status(500).json({ message: "Unknown error occurred" }));
    }
};
exports.catchException = catchException;
