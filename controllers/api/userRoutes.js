const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    console.log('Login Route Hit')
  try {

    const userData = await User.findOne({ where: { name: req.body.name } })

    if (!userData) {
      res.status(400).json({ message: "I'm sorry, your credentials don't seem to match our database. Please try again." })
      return
    }

    const validPassword = await userData.checkPassword(req.body.password)

    if (!validPassword) {
      res.status(400).json({ message: "I'm sorry, your credentials don't seem to match our database. Please try again." })
      return
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'Login successful. Welcome.' })
    })

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    });
  } else {
    res.status(404).end()
  }
});

router.get('/users', async (req, res) => {

  try {
    const data = await User.findAll()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router
