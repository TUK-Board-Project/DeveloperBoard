const Router = require('@koa/router');
const router = new Router();

// 테스트용 API
router.get('/api', (ctx, next) => {
    ctx.body = 'hello world';
});

module.exports = router;