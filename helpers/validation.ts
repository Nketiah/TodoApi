import { Prisma } from '@prisma/client'
import { prisma } from '../prisma/index'


export const validEmail = (email: string) => {
    return String(email).toLowerCase().match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
}

export const validLength = (text: string, min: number, max: number) => {
    if (text.length > max || text.length < min) {
        return false
    }
    return true
}


export const validateUsername = async (username: string) => {
    let a = false
    do {
        let username_exists = await prisma.user.findUnique({
            where:{username: username} as any,
            select: {username: true} as any
        })

        if (username_exists) {
            //change username
            username += (+new Date() * Math.random()).toString().substring(0, 1)
            a = true
        }
        else {
            a = false
        }
    } while (a)
    
    return username
}