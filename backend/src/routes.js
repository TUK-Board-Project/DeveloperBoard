const Router = require('@koa/router');
const router = new Router();
const postController=require('./api/post/controller');


router.post('/api/posts',postController.save) 



// 테스트용 API
router.get('/api', (ctx, next) => {
    ctx.body = 'hello world';
});

module.exports = router;
