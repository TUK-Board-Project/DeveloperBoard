const{pool}=require('../../data/database');

exports.createPosts=async(user_id,title,contents)=>{
    const query=`INSERT INTO post(user_id,title,contents) VALUES(?,?,?)`;
    return await pool(query,[user_id,title,contents]);
}