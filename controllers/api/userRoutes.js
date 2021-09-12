const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
//const withAuth = require('../../utils/auth');

router.get('/', (req, res) =>{
    try {
        const userData = await User.findAll({
            attributes: {exclude: ['password']}
        })
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', (req, res) =>{
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: {exclude: ['password']},
            where: {
                id: req.params.id
            },
            include: [{ model: Blog,}, {model: Comment}],
        })
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
    try {
      // Find the user who matches the posted username
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'no user with that username' });
        return;
      }

      const validPassword = await userData.checkPassword(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

         // Create session variables based on the logged in user
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;