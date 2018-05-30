const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");

router.get('/logout', (req,res)=>{
  req.logout();
  req.session.destroy(e=>{
    res.send({message: 'deslogueado'})
  })
});

router.post('/login',
  passport.authenticate('local'),
  (req,res,next)=>{
    return res.json(req.user);
  });

router.post('/signup', (req, res, next) => {
  req.body.profilePic = 'https://www.w3schools.com/w3css/img_lights.jpg';
  User.register(req.body, req.body.password, (err, user)=>{
    if(err) return res.json(err);
    return res.json(user);
  })
});


module.exports = router;