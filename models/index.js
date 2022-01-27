// imports the User and Post model
const User = require("./User");
const Post = require("./Post");

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// defines the relationship of the Post model to the User; this is so that a post can belong to one user, not many users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// exports any object with User as a property
module.exports = { User, Post };