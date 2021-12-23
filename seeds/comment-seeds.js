const { Comment } = require('../models')


const commentData = [
    {
        user_id: 4,
        title: 'Cool',
        description: 'I agree',
        post_id: 1
    },
    {
        user_id: 3,
        title: 'Right?',
        description: 'Good idea',
        post_id: 2
    },
    {
        user_id: 2,
        title: 'Word',
        description: 'Interesting idea',
        post_id: 3
    },
    {
        user_id: 1,
        title: 'Oh?',
        description: 'Well, thats okay.',
        post_id: 4
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;