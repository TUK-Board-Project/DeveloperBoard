const{pool}=require('../../data/database');              //query는 sql데이터베이스를 의미함.

exports.createPosts=async(user_id,title,contents)=>{
    const query=`INSERT INTO posts(user_id,title,contents) VALUES(?,?,?)`; 
    return await pool(query,[user_id,title,contents]);
}

exports.getAllPosts=async()=>{
    const query=`SELECT id, title, user_id FROM posts` 
    return await pool(query,[]);
}

exports.getById=async(id)=>{
    const query=`SELECT * FROM posts where id=?`
    return await pool(query,[id]);
}