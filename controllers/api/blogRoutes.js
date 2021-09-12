const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{ model: User},  {model: Comment}]
        })
        res.status(200).json(blogData);
    } catch (err) {
        res.status(450).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [{ model: User},  {model: Comment}]
          })
      
           res.status(200).json(blogData);
    } catch (err) {
        res.status(450).json(err);
    }
})

router.post('/', withAuth, async (req, res) => {
    try {
      const newBlog = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    Blog.update(req.body, {
        where: {
            id: req.params.id,
        }
    })
    .then((updatedBlog) => {
        if (!updatedBlog) {
            res.status(404).json({ message: 'No Post found with this ID'});
        }
        res.json(updatedBlog);
      })
      .catch((err) => 
      
      res.status(500).json(err));
})

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No Blog Post found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
