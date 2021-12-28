const router = require('express').Router();
const User = require('../../models/User');

//login
router.post('/login', async (req, res) => {
  console.log('Login Route Hit')
  try {
    console.log('Trying To Find User')
    const userData = await User.findOne({ where: { name: req.body.name } })
    console.log(userData)

    if (!userData) {
      console.log('No User Data')
      res.status(400).json({ message: "I'm sorry, your credentials don't seem to match our database. Please try again." })
      return
    }

    const validPassword = await userData.checkPassword(req.body.password)

    if (!validPassword) {
      console.log('Invalid Password')
      res.status(400).json({ message: "I'm sorry, your credentials don't seem to match our database. Please try again." })
      return
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'Login successful. Welcome.' })
    })

  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

//get api/users
router.get('/', async (req, res) => {

  try {
    const data = await User.findAll()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
});

//post api/users - create new user
router.post('/', async (req, res) => {
  try {
    console.log('CREATE ROUTE HIT')
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

    console.log('userData', userData)

    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.name = userData.name
      req.session.email = userData.email
      req.session.loggedIn = true

      res.json(userData)
    })
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router
