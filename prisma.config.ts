import { defineConfig } from '@prisma/sdk'
import process from 'process'
export default defineConfig({
  schema: {
    datasource: {
      url: process.env.DATABASE_URL,
    },
  },
})