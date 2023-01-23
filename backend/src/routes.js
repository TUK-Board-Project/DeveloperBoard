const Router = require('@koa/router');
const multer = require('@koa/multer');
const router = new Router();
const { verify } = require('./middleware/auth')
const path = require("path");
const upload = multer({
    dest: path.resolve(__dirname, '../', 'storage')
});

const postController = require('./api/post/controller');
const userController = require('./api/user/controller');
const imageController = require('./api/image/controller');
const commentController = require('./api/comment/controller');

// 테스트용 API
router.get('/api', (ctx, next) => {
    ctx.body = 'hello world';
});

router.post('/api/user/register', userController.register);
router.post('/api/user/login', userController.login);

router.use(verify);

router.get('/api/user/:id', userController.info);

router.post('/api/posts',postController.save) ;

router.post('/api/images', upload.single('file'), imageController.upload);
router.get('/api/images/:id', imageController.download);
router.del('/api/images/:id', imageController.deleteById);

router.post('/api/comments', commentController.saveComment);
router.get('/api/comments/:id', commentController.findById);
router.del('/api/comments/:id', commentController.deleteById);

module.exports = router;
