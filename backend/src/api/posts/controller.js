const{createPosts,getAllPosts,getById,updatePosts,deletePosts}=require('./query');
const{getAllByPostsId}=require('../comment/query');

exports.save=async(ctx,next)=>{
    let body=ctx.request.body;
    let {affectedRows,insertId}=await createPosts(body.user_id,body.title,body.contents, body.board_type);
    ctx.body={
        id:insertId
    }
}

exports.getList=async(ctx,next)=>{
    let board_type = ctx.request.query.board_type;
    let result=await getAllPosts(board_type);
    if (result.length>0) {
        ctx.body=result
    }else{
        ctx.body={
            result:"no contents"
        }
    }
}

exports.getOne=async(ctx,next)=>{
    let id=ctx.params.id
    let result=await getById(id);
    let comments=await getAllByPostsId(id);
    if(result.length>0){
        let body=result[0]
        body.comment=comments
        ctx.body=body
    }else{
        ctx.body={
            result:"no contents"
        }
    }
    
}


exports.update=async(ctx,next)=>{
    let id=ctx.params.id
    let body=ctx.request.body 
    let {affectedRows}=await updatePosts(id,body.title,body.contents);
    if(affectedRows>0){
        ctx.body= {
        result:"success"
       }
    }else{
        ctx.body={
            result:"fail"
        }
    }
}

exports.delete=async(ctx,next)=>{
    let id=ctx.params.id
    let {affectedRows}=await deletePosts(id);
    if(affectedRows>0){
        ctx.body= {
        result:"success"
       }
    }else{
        ctx.body={
            result:"fail"
        }
    }
    
}

