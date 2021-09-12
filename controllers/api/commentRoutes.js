const router = require('express').Router();
const { Comment, User, Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: User},  {model: Blog}]
          })
      
           res.status(200).json(commentData);
    } catch (err) {
        res.status(450).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            include: [{ model: User},  {model: Blog}]
          })
      
           res.status(200).json(commentData);
    } catch (err) {
        res.status(450).json(err);
    }
})

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        blog_id: req.body.blog_id,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', withAuth, async (req, res) => {
    Comment.update(req.body, {
        where: {
            id: req.params.id,
        }
    })
    .then((updatedComment) => {
        if (!updatedComment) {
            res.status(404).json({ message: 'No Comment dound with this ID'});
        }
        res.json(updatedComment);
      })
      .catch((err) => 
      
      res.status(500).json(err));
})

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No Comment found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;