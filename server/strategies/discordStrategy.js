const { Strategy } = require("passport-discord");
const passport = require("passport");
const User = require("../models/User");
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const DISCORD_CLIENT_REDIRECT = process.env.DISCORD_CLIENT_REDIRECT || '/auth/redirect';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: DISCORD_CLIENT_REDIRECT,
      scope: ["identify", "guilds"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ discordId: profile.id });

        if (user) return done(null, user);

        const newUser = new User({
          discordId: profile.id,
          username: profile.username,
          guilds: profile.guilds,
        });

        const savedUser = await newUser.save();
        done(null, savedUser);
      } catch (error) {
        console.error(error);
        return done(err, null);
      }
    }
  )
);
