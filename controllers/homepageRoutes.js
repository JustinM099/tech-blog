const { Comment, Post, User } = require('../models')
const withAuth = require('../utils/auth')
const router = require('express').Router()

router.get('/', withAuth, async (req, res) => { //withAuth
  try {
    console.log('GETTING POSTS')
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    })
    console.log('postData', postData)
    const posts = postData.map((data) => data.get({ plain: true }));
    console.log('Posts', posts)

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
  res.render('login-page');
});

router.get('/new-post', async (req, res) => {
  res.render('new-post')
})

router.get('/homepage', withAuth, async (req, res) => { //withAuth
  try {
    console.log('GETTING POSTS')
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log('postData', postData)
    const posts = postData.map((data) => data.get({ plain: true }));
    console.log('Posts', posts)

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;