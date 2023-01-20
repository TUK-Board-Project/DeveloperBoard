const{pool}=require('../../data/database');

exports.create1=async(user_id,title,contents)=>{
    const query=`INSERT INTO post(user_id,title,contents) VALUES(?,?,?)`;
    return await pool(query,[user_id,title,contents]);
}