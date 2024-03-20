import { PrismaClient } from '@prisma/client';
declare global {
    var prisma: PrismaClient | undefined;
};

//just to make sure that we don't create multiple instances of PrismaClient while hot reloading
export const db=globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db;
}

