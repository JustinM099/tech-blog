const router = require('express').Router()
const withAuth = require('../../utils/auth')
const { Comment, User, Post } = require('../../models')

router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Post,
                    attributes: ['id', 'title', 'description', 'user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['id', 'name']
                        }

                    ]
                }
            ]
        })
        const comments = commentData.get({ plain: true })
        console.log('COMMENTS', comments)
        res.render('comments-page', { comments, loggedIn: true })
        // res.json(commentData)
    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
})

router.get('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Post,
                    attributes: ['id', 'title', 'description', 'user_id']
                }
            ]
        })
        const comment = commentData.get({ plain: true })
        console.log('COMMENT', comment)
        res.render('comments-page', { comment, loggedIn: true })
        // res.json(commentData)
    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
})

router.post('/', withAuth, async (req, res) => {
    if (req.session) {
        try {
            newComment = await Comment.create({
                title: req.body.title,
                description: req.body.description,
                user_id: req.session.user_id
            })
            res.json(newComment)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
        destroyedComment = await Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!destroyedComment) {
            res.status(404).json({ message: 'No such comment found.' })
            return
        }
        res.json(destroyedComment)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router