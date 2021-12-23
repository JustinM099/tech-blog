const { Post } = require('../models')


const postData = [
    {
        title: 'New Technology',
        description: 'I think we should really start using Sequelize.',
        user_id: '1',
    },
    {
        title: 'Sequelize',
        description: 'I love Sequelize; I have had a lot of success with it on other projects.',
        user_id: '2',
    },
    {
        title: 'NoSQL',
        description: 'I am a big fan of NoSQL databases.',
        user_id: '3',
    },
    {
        title: 'Databases',
        description: 'I dont really like databases at all.',
        user_id: '4',
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;