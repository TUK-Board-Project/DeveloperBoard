const Router = require('@koa/router');
const router = new Router();
const postController=require('./api/post/controller');
const userController = require('./api/user/controller');
const imageController = require('./api/image/controller');
const { verify } = require('./middleware/auth')

// 테스트용 API
router.get('/api', (ctx, next) => {
    ctx.body = 'hello world';
});

router.post('/api/user/register', userController.register);
router.post('/api/user/login', userController.login);

router.use(verify);
router.get('/api/user/:id', userController.info);
router.post('/api/posts',postController.save) ;

router.post('/api/images', imageController.upload);
router.get('/api/images/:id', imageController.download);
router.del('/api/images/:id', imageController.deleteById);

module.exports = router;
