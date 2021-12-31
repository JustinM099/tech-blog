const router = require('express').Router()
const withAuth = require('../../utils/auth')
const { Comment } = require('../../models')

router.get('/', async (req, res) => {
        const commentData = await Comment.findAll()
        res.json(commentData)
})

router.post('/', withAuth, async (req, res) => {
    if(req.session){
       newComment = await Comment.create(req.body)
       res.json(newComment)
    }
})

module.exports = router