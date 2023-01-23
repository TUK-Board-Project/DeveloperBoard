const{createPosts,getAllPosts,getById}=require('./query');

exports.save=async(ctx,next)=>{
    let body=ctx.request.body;
    let {affectedRows,insertId}=await createPosts(body.user_id,body.title,body.contents);
    ctx.body={
        id:insertId
    }
}

exports.getList=async(ctx,next)=>{
    let result=await getAllPosts();
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
    if(result.length>0){
        ctx.body=result[0]
    }else{
        ctx.body={
            result:"no contents"
        }
    }
    
}



