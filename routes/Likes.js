const express = require("express");
const router = express.Router();
const { Likes } = require("../models");
const { validatetoken } = require("../middlewares/AuthMiddlewares");

router.post("/", validatetoken, async (req, res) => {
  const { PostId } = req.body;
  const UserId = req.user.id;

  const found = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });
  if (!found) {
    await Likes.create({ PostId: PostId, UserId: UserId });
    res.json("Liked The Post");
  } else {
    await Likes.destroy({
      where: {
        PostId: PostId,
        UserId: UserId,
      },
    });
    res.json("Unliked Post");
  }
});

module.exports = router;
