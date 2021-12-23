const Comment = require('./Comment')
const Post = require('./Post')
const User = require('./User')

module.exports = { Comment, Post, User};

Comment.belongsTo(Post, {foreignKey: 'post_id'})
Post.hasMany(Comment, {foreignKey: 'post_id'})

User.hasMany(Post, {foreignKey: 'user_id'})
Post.belongsTo(User, {foreignKey: 'user_id'})

Comment.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Comment, {foreignKey: 'user_id'})

module.exportss = { User, Post, Comment }
