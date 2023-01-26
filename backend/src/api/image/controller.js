const { create, show, deleteOne, findByPosts } = require('./query');
const fs = require('fs')

exports.searchPostsImage = async (ctx, next) => {
    let id = ctx.params.id;

    let item = findByPosts(id);

    if (item.length < 1) {
        ctx.body = { result: "fail" }
        return;
    }
    ctx.response.set("content-disposition", `attachment; filename=${item.original_name}`);
    ctx.statusCode = 200;
    ctx.body = fs.createReadStream(item.file_path);
}

exports.upload = async (ctx, next) => {
    let file = ctx.request.file;
    let { posts_id } = ctx.request.body;
    let { affectedRows, insertId } = await create(file.originalname, file.path, posts_id);

    if (affectedRows > 0) {
        ctx.body = {
            id: insertId
        }
    } else {
        ctx.body = {
            result: 'fail'
        }
    }
}

exports.download = async (ctx, next) => {
    let id = ctx.params.id;

    let item = await show(id);

    if (item.length < 1) {
        ctx.body = { result: "fail" }
        return;
    }
    ctx.response.set("content-disposition", `attachment; filename=${item.original_name}`);
    ctx.statusCode = 200;
    ctx.body = fs.createReadStream(item.file_path);
}

exports.deleteById = async (ctx, next) => {
    let id = ctx.params.id;

    let { affectedRows } = await deleteOne(id);

    if (affectedRows < 1) {
        ctx.body = {
            result : 'fail'
        }
    } else {
        ctx.body = {
            result : 'success'
        }
    }
}
