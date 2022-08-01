const Router = require("@koa/router");
const router = new Router();

const moviesController = require("../controller/controller");


router.get("/movies/:id", moviesController.getById);
router.get("/movies", moviesController.showAll)
router.get("/cinemas", moviesController.getCinema)

module.exports = router;