import  express from "express";
import  createTweet  from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { createUser ,login } from "../../controllers/auth-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";
const router=express.Router();


router.post('/likes/toggle',toggleLike);
router.post('/tweets',createTweet);

router.post('/comment',authenticate,createComment)

router.post('/signup',createUser)

router.post('/login', login);
export default router;
