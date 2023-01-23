const { pool } = require('../../data/database');

exports.getPostsByUserId=async(user_id)=>{
    const query=`SELECT title,id FROM posts WHERE user_id=?`
    return await pool(query,[user_id])
}

exports.getPostsByUserComments=async(user_id)=>{
    const query=`SELECT distinct p.title,p.id FROM posts p where p.id in(
        select c.posts_id from comment c where c.user_id=?
        );`
    let result= await pool(query,[user_id]) 
    return result.length>0? result:null
}