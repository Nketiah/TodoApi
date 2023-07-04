import { prisma } from "../prisma"

export const emailExist = async (email: string) =>{
    const user = await prisma.user.findUnique({
    where: {email},
    select: {email: true}
  })

  return !!user  // convert user to a boolean value
}   