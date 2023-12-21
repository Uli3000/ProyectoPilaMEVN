//imports
const { MONGODB_URI } = require("./config");
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const MongoStore = require("connect-mongo");
//const { SECRET, MONGODB_URI } = require("./config");
require("./strategies/discordStrategy");


const app = express();
const port = process.env.PORT || 5222;
const SECRET = process.env.SECRET || "some random secret";

// middLewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(
    session({
      secret: SECRET,
      cookie: {
        maxAge: 60000 * 60 * 24, // 1 day
      },
      saveUninitialized: false,
      resave: false,
      name: "ulises-discord",
      store: MongoStore.create({
        mongoUrl: process.env.DB_URI,
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

// Global variables
    app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
  });

//conexion a la database
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
.then(() => console.log("Conexion exitosa!"))
.catch((err) => console.log(err));

//routes prefix
app.use("/api/post", require("./routes/routes"));
app.use("/auth", require("./routes/auth.routes"));



//Iniciar el servidor
app.listen(port, () => console.log(`Server corriendo en http://localhost:${port}`));
