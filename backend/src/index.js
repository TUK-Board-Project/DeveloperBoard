require('dotenv').config();
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

app.listen(port, () => {
    console.log(`${port} 포트 서버 구동중`);
});