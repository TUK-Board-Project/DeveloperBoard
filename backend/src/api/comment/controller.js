const { createComment, getComment, deleteComment } = require('./query');

exports.saveComment = async (ctx, next) => {
    let { user_id, posts_id, contents } = ctx.request.body;
    let { affectedRows, insertId } = await createComment(user_id, posts_id, contents);
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

exports.findById = async (ctx, next) => {
    let id = ctx.params.id;

    let result = await getComment(id);

    if (result.length < 1) {
        ctx.body = { result: "fail" }
        return;
    }
    ctx.body = result;
}

exports.deleteById = async (ctx, next) => {
    let id = ctx.params.id;

    let { affectedRows } = await deleteComment(id);

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