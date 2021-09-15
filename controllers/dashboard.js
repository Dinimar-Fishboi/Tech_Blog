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
                model: Comment,
                include: {
                    model: User
                }
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

router.get('/create-blog', (req,res) => {
    res.render('create-blog');
})

router.get('/blog-update/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findOne({
            where :{
                id: req.params.id
            },
            include: [{ model: User}, { model: Comment }]
        })

        const blog = blogData.get({ plain: true });

        res.render('blog-update', {blog, logged_in: true })

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router