const Router = require('@koa/router');
const router = new Router();
const postsController=require('./api/posts/controller');


router.post('/api/posts',postsController.save) //posts에 있는 Controller
router.get('/api/posts',postsController.getList)
router.get('/api/posts/:id',postsController.getOne)



// 테스트용 API
router.get('/api', (ctx, next) => {
    ctx.body = 'hello world';
});

module.exports = router;
