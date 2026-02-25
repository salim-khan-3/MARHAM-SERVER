import { PrismaClient } from '@prisma/client'
import { env } from 'process'

export const prisma = new PrismaClient({
  adapter: null, // সরাসরি ডাটাবেস কানেকশনের জন্য
  datasourceUrl: env.DATABASE_URL
} as any)