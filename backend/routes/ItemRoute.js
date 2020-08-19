const router = require("express").Router();
let Item = require("../models/ItemModel");

router.route("/").get(async (req, res, next) => {
  try {
    await Item.find().then((item) => res.json(item));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
