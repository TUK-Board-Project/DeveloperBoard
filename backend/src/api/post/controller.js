const{createPosts}=require('./query');

exports.save=async(ctx,next)=>{
    let body=ctx.request.body;
    let {affectedRows,insertId}=await createPosts(body.user_id,body.title,body.contents);
    ctx.body={
        id:insertId
    }
}

