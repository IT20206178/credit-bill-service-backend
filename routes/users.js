const router =require("express").Router();
const { response } = require("express");
let User=require("../models/user");


//Get User Details
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  module.exports=router;