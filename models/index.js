const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');

//User can have many Blog (posts)
User.hasMany(Blog, {
    constraints:false,
   foreignKey: 'user_id',
})

//A Blog (post) will only belong to one User
Blog.hasOne(User, {
    constraints:false,
   foreignKey: "user_id",
})

//A Blog may have many Comments
Blog.hasMany(Comment, {
    constraints:false,

   foreignKey: 'blog_id',
})

module.exports = { User, Comment, Blog};