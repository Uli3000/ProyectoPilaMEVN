const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.get("/", (req, res) => {
  const redirectUrl = "https://discord.com/oauth2/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fredirect&scope=identify%20guilds&client_id=1115858878219964519";
  res.json({ redirectUrl });
});

router.get("/redirect", passport.authenticate("discord"), (req, res) => {
  res.redirect("localhost:8080/"); 
});

router.get("/logout", (req, res) => {
  req.logout(function(err) { 
    if (err) {
      // Manejar el error de cierre de sesión
      console.error(err);
      return res.status(500).json({ message: "Error al cerrar sesión" });
    }
    // Cierre de sesión exitoso
    res.redirect("/"); // Redirigir a la página principal 
  });
});

module.exports = router;
