const Router = require('@koa/router');
const multer = require('@koa/multer');
const router = new Router();
const { verify } = require('./middleware/auth')
const path = require("path");
const upload = multer({
    dest: path.resolve(__dirname, '../', 'storage')
});

const postsController = require('./api/posts/controller');
const userController = require('./api/user/controller');
const imageController = require('./api/image/controller');
const commentController = require('./api/comment/controller');
const myPageController = require('./api/mypage/controller');



// 테스트용 API
router.get('/api', (ctx, next) => {
    ctx.body = 'hello world';
});

router.post('/api/users/register', userController.register);
router.post('/api/users/login', userController.login);

router.use(verify);

router.get('/api/users/:id', userController.info);

router.post('/api/posts',postsController.save);
router.get('/api/posts',postsController.getList);//글 목록조회
router.get('/api/posts/:id',postsController.getOne);//글 상세조회

router.put('/api/posts/:id',postsController.update);//수정
router.del('/api/posts/:id',postsController.delete);//삭제




router.post('/api/images', upload.single('file'), imageController.upload);
router.get('/api/images/:id', imageController.download);
router.del('/api/images/:id', imageController.deleteById);

router.post('/api/comments', commentController.saveComment);
router.get('/api/comments/:id', commentController.findById);
router.del('/api/comments/:id', commentController.deleteById);

router.get('/api/users/:id/posts',myPageController.getUserPostsListByPosts);
router.get('/api/users/:id/comments',myPageController.getUserPostsListByComments);


module.exports = router;


