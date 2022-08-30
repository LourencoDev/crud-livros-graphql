import dotenv from 'dotenv';
dotenv.config();

export const constants = {
  DATABASE: {
    URL: process.env.DATABASE_URL,
  }
};