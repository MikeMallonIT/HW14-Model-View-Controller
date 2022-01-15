const router = require('express').Router();
const { Comment } = require('../../models')
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  //alert(`Post Updated Post Text: ${req.body.text}  Post Id: ${req.body.post_id} User ID: ${req.session.user_id}`); 
  
  try {
    const newComment = await Comment.create(
      {
        text: req.body.text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
