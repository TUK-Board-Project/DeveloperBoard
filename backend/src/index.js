require('dotenv').config();
const {init} = require('./data/init');
const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = new Router();

const port = 3000;
app.use(bodyParser({formLimit: '10mb'}));

router.use(require('./routes').routes());
app.use(router.routes());
app.use(router.allowedMethods());

init().then(r => app.listen(port, () => {
    console.log(`${port} 포트 서버 구동중`);
}));
