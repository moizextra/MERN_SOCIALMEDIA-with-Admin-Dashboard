const express = require('express');
const {
  createPost,
  getPosts,
  getUserPosts,
  getPost,
  updatePost,
  deletePost,
  addComment,
  // likePost,
  unlikePost,
} = require('../controllers/PostControllers');
const { IsAuthenticated, authorizedRoles } = require('../middleware/auth');

const router = express.Router();

// Create a new post
router.route('/posts').post(IsAuthenticated, createPost);

// Get a list of all posts
router.route('/posts').get(getPosts);

// Get posts by a specific user
router.route('/user/:userId/posts').get(getUserPosts);

// Get a specific post
router.route('/posts/:postId').get(getPost);

// Update a post
router.route('/posts/:postId').put(IsAuthenticated, updatePost);

// Delete a post
router.route('/posts/:postId').delete(IsAuthenticated, deletePost);

// Add a comment to a post
router.route('/posts/:postId/comments').post(IsAuthenticated, addComment);

// Like a post
// router.route('/posts/:postId/like').post(IsAuthenticated, likePost);

// Unlike a post
// router.route('/posts/:postId/unlike').delete(IsAuthenticated, unlikePost);

module.exports = router;
