import { defineConfig } from '@prisma/config'
import process from 'process'

export default defineConfig({
  // এখানে সরাসরি "classic" অথবা "js" দিতে হবে
  engine: "classic", 
  
  datasource: {
    url: process.env.DATABASE_URL,
  },
})