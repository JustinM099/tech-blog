const { Comment, Post, User } = require('../models')
const withAuth = require('../utils/auth')
const router = require('express').Router()

router.get('/', withAuth, async (req, res) => {

try{
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: Comment,
          attributes: ['id', 'description', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['name', 'email']
          }
        },
        {
          model: User,
          attributes: ['name', 'email']
        }
      ]
    })
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }


  });

  module.exports = router