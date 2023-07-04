import jwt from "jsonwebtoken"

export const generateToken = (userId: string, tokenExpiresIn: string) => {
  return jwt.sign({ userId: userId }, process.env.JWT_SECRET!, {
    expiresIn: tokenExpiresIn,
  })
}