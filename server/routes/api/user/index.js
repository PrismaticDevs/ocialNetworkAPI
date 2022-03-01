const router = require('express').Router();
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, login } = require('../../../controllers/userController');

router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

router.post('/login', login)

module.exports = router;