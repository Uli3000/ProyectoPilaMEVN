require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5222,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pilacompleta1",//"mongodb+srv://root:ball2209@mevn.oakktv8.mongodb.net/?retryWrites=true&w=majority",
  SECRET: process.env.SECRET || "some random secret",
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  DISCORD_CLIENT_REDIRECT: process.env.DISCORD_CLIENT_REDIRECT || '/auth/redirect',
};
