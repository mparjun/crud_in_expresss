const Customer = require("../models/Customer");
const mongoose = require("mongoose");

exports.homepage = async (req, res) => {
    const messages = await req.consumeFlash('info');

    
    const locals = {
      title: 'NodeJs',
      description: 'Free NodeJs User Management System'
    }
    res.render('index',{locals,messages});
};


exports.addCustomer = async (req, res) => {

    
    const locals = {
      title: 'NodeJs',
      description: 'Free NodeJs User Management System'
    }
    res.render('customer/add',locals);
};

exports.postCustomer = async (req, res) => {
    console.log(req.body);
  
    const newCustomer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      details: req.body.details,
      tel: req.body.tel,
      email: req.body.email,
    });
  
    try {
      await Customer.create(newCustomer);
      await req.flash("info", "New customer has been added.");
  
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  };