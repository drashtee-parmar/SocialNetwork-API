const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require("../../controllers/user-controllers");
/* User routes */

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/friends/:friendId')
    .put(addFriend)
    .delete(removeFriend)

module.exports = router;
