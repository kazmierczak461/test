var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/*Home page */

router.get('/home', function (req, res)
{
  res.render('home.html');
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

/* GET Userlist page. */
app.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    /*res.render('userlist', {
      "userlist" : docs
    });*/
    res.json(docs);
  });
});

app.delete('/userlist/:todo_id', function(req, res) {
  usercollection.remove({
    _id : req.ObjectId
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, docs) {
      if (err)
        res.send(err)
      res.json(docs);
    });
  });
});

app.post('/userlist', function(req, res) {

  // create a todo, information comes from AJAX request from Angular
  Todo.create({
    text : req.body.text,
    done : false
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
      if (err)
        res.send(err)
      res.json(todos);
    });
  });

});

/* POST to Add User Service
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username" : userName,
    "email" : userEmail
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("userlist");

    }
  });
});*/

module.exports = router;
