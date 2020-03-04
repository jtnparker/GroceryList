const controllers = require("./controllers.js")
const router = require('express').Router();

router
.route("/")
.get(controllers.getItems)
.post(controllers.postItems);

router
    .route('/:index')  //colon is a placeholder basically it gets replaced by the url. localhost:3000/api.
    .delete(controllers.deleteItems)

module.exports = router;