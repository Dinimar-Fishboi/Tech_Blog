const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{
                model: Comment
            }]
        })

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('dashboard', {
            blogs, 
            logged_in: true   
        })

    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router