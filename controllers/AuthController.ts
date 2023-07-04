import { NextFunction, Response, Request } from "express"
import { emailExist } from "../helpers/emailExist"
import { catchException } from "../helpers/errorHandler"
import { sendCookieToken } from "../helpers/sendCookieToken "
import { validEmail } from "../helpers/validation"
import { prisma, User } from "../prisma"



// @desc    Register user 
// @route   POST /api/v1/auth/register
// @access  Public
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
          const { fullname,email,mobile,password,role} = req.body as User
          if(!validEmail(email)){
            return next(res.status(400).json({message: "Invalid Email"}))
          }
          
          if(await emailExist(email)){
            return next(res.status(400).json({message: "Email already exists"}))
          }

          const user = await prisma.user.create({
            data: {
                fullname,
                email,
                mobile,
                password,
            }
          })
          sendCookieToken(user, res)
    } catch (error) {
        catchException(error, res, next)
    } 
}


export const userLogin = async (req: Request, res: Response) => {
    //
}
export const logout = async (req: Request, res: Response) => {
    //
}

const name = ""