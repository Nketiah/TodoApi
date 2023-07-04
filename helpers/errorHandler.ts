import jwt from 'jsonwebtoken'
import { NextFunction, Response } from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

// 0597484708
export const catchException = (error: any, res: Response, next: NextFunction) => {
    console.error("Error: ",error)
  if(error instanceof jwt.JsonWebTokenError) {
    return next(res.status(401).json({message: "Invalid JWT"}))
  }else if(error instanceof PrismaClientKnownRequestError){
    return next(res.status(400).json({message: "Database error occurred"}))
  }else{
    return next(res.status(500).json({message: "Unknown error occurred"}))
  }
}