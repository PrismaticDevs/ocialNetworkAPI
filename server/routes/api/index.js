const router = require('express').Router();
const userRoutes = require('./user');
const thoughtRoutes = require('./thought');
const commentRoutes = require('./comment');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/comments', commentRoutes);

module.exports = router;