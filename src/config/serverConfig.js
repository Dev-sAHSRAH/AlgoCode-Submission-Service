const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_HOST: process.env.REDIS_HOST || "localhost",
  NODE_ENV: process.env.NODE_ENV || "development",
  ATLAS_DB_URL: process.env.ATLAS_DB_URL,
};
