const { Comment, Post, User } = require('../models')
const withAuth = require('../utils/auth')
const router = require('express').Router()

router.get('/', async (req, res) => { //withAuth
    try {
      const postData = await Post.findAll();
  
      const posts = postData.map((data) => data.get({ plain: true }));
  
      res.render('homepage', {
        posts,

        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {

    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  router.get('/new-post', async (req, res) => {
    res.render('new-post')
  })

  module.exports = router;