const {getPostsByUserId,getPostsByUserComments}=require("./query")

exports.getUserPostsListByPosts = async(ctx,next)=>{
    let id=ctx.params.id
    let result =await getPostsByUserId(id);
    if(result.length<1){
        ctx.body={
            result:"no contents"
        }
    }else{
        ctx.body=result
    }
}

exports.getUserPostsListByComments = async(ctx,next)=>{
    let id=ctx.params.id
    let result =await getPostsByUserComments(id);
    if(result.length<1){
        ctx.body={
            result:"no contents"
        }
    }else{
        ctx.body=result
    }
}