// imports the User and Post model
const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote')

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// defines the relationship of the Post model to the User; this is so that a post can belong to one user, not many users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

// exports any object with User as a property
module.exports = { User, Post, Vote };