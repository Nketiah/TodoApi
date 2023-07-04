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
exports.validateUsername = exports.validLength = exports.validEmail = void 0;
const index_1 = require("../prisma/index");
const validEmail = (email) => {
    return String(email).toLowerCase().match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};
exports.validEmail = validEmail;
const validLength = (text, min, max) => {
    if (text.length > max || text.length < min) {
        return false;
    }
    return true;
};
exports.validLength = validLength;
const validateUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    let a = false;
    do {
        let username_exists = yield index_1.prisma.user.findUnique({
            where: { username: username },
            select: { username: true }
        });
        if (username_exists) {
            //change username
            username += (+new Date() * Math.random()).toString().substring(0, 1);
            a = true;
        }
        else {
            a = false;
        }
    } while (a);
    return username;
});
exports.validateUsername = validateUsername;
