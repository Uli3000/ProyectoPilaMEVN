function isAuthorized(req, res, next) {
  if (req.isAuthenticated()) { // Utiliza req.isAuthenticated() para verificar la autenticación
    console.log("User is logged in");
    console.log(req.user);
    next();
  } else {
    res.redirect("/");
  }
}

function isNotAuthorized(req, res, next) {
  if (req.isAuthenticated()) { // Utiliza req.isAuthenticated() para verificar la autenticación
    console.log("User is not logged in");
    req.isAuthenticated = true; 
  } else {
    req.isAuthenticated = false; 
  }
  next();
}

module.exports = {
  isAuthorized,
  isNotAuthorized,
};