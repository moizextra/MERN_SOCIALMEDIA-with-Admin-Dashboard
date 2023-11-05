const Post= require ("../models/Postmodels");
const Comment= require ("../models/Commentmodel");
// Create a new post
exports.createPost = async (req, res) => {
  const post = await Post.create({
    author: req.user._id, 
    textContent: req.body.textContent,
    images: req.body.images
  });

  res.status(201).json(post);
}

// Get all posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find()
    .populate('author')
    .populate('comments')
    .populate('likes')
    .sort('-createdAt');

  res.json(posts);
}

// Get posts for a user
exports.getUserPosts = async (req, res) => {
  const posts = await Post.find({author: req.params.userId})
    .populate('author')
    .populate('comments')
    .populate('likes')

  res.json(posts);
}

// Get a single post
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate('author')
      .populate('comments')
      // .populate('likes');

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


// Update a post
exports.updatePost = async (req, res) => {
  // Validate user is author
  
  const post = await Post.findByIdAndUpdate(req.params.postId, req.body, {
    new: true
  });

  res.json(post);
}

// Delete a post
exports.deletePost = async (req, res) => {
  // Validate user is author

  await Post.findByIdAndDelete(req.params.postId);

  res.json({message: 'Post deleted'});
} 

// Add comment
exports.addComment = async (req, res) => {
// creating a Comment instance
  const comment = await Comment.create({
author:req.user._id,
post:req.params.postId,
textContent:req.body.textContent
  })
 const savedComment= await comment.save() ;
  const updatedPost = await Post.findByIdAndUpdate(
  req.params.postId,
    { $push: { comments: savedComment._id } },
    { new: true }
  );

  res.json(updatedPost);

}
