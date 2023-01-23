const{pool}=require('../../data/database');              

exports.createPosts=async(user_id,title,contents)=>{
    const query=`INSERT INTO posts(user_id,title,contents) VALUES(?,?,?)`; 
    return await pool(query,[user_id,title,contents]);
}

exports.getAllPosts=async()=>{
    const query=`SELECT id, title, user_id FROM posts`;
    return await pool(query,[]);
}

exports.getById=async(id)=>{
    const query=`SELECT * FROM posts where id=?`;
    return await pool(query,[id]);
}

//수정
exports.updatePosts=async(id,title,contents)=>{
    const query=`UPDATE posts set title=?, contents=? where id=?`
    return await pool(query,[title,contents,id]); 
}

//삭제

exports.deletePosts=async(id)=>{
    const query=`DELETE FROM posts where id=?`
    return await pool(query,[id]);
}