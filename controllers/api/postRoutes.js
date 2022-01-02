const router = require('express').Router()
const { append } = require('express/lib/response');
const { Post, Comment, User } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    console.log('REQ.PARAMS.ID', req.params.id)
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'description', 'post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['name', 'email']
                    }
                },
                {
                    model: User,
                    attributes: ['name', 'email']
                }
            ]
        })
        if (!postData) {
            res.status(404).json({ message: 'No such post.' })
            return
        }
        console.log('PostData', postData)
        const post = postData.get({ plain: true })
        console.log('POST', post)
        res.render('edit-post', { post, loggedIn: true })
    } catch (err) {
        console.log('err', err)
        res.status(500).json("Error!", err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.update({
            title: req.body.title,
            description: req.body.description
        },
            {
                where: {
                    id: req.params.id
                }
            })
        if (!post) {
            res.status(404).json({ message: 'No such post' })
        }
        res.json(post)
    } catch (err) {
        console.log('error', err)
        res.status(500).json("Error!", err)
    }
})

router.delete(':/id', async (req, res) => {
    console.log(req.params.id)
   try {
       const deletedPost = await Post.destroy({
       where: {
           id: req.params.id
       }
   })
   if(!deletedPost){
       res.status(404).json({message: `I'm sorry, we couldn't find that post.`})
   }}catch(err){
       console.log(err)
       res.status(500).json(err)
   }

})

module.exports = router

