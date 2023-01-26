const { pool } = require('../../data/database');

exports.createComment = async (user_id, posts_id, contents) => {
    const query = `INSERT INTO comment(user_id, posts_id, contents) VALUES (?, ?, ?);`
    return await pool(query, [user_id, posts_id, contents]);
}

exports.getComment = async (id) => {
    const query = `SELECT c.id, c.contents, c.posts_id, c.user_id, u.email FROM comment c, user u WHERE c.id = ? and c.user_id = u.id`;
    let result = await pool(query, [id]);
    return (result.lenth < 0) ? null : result[0]
}

exports.deleteComment = async (id) => {
    const query = `DELETE FROM comment WHERE id = ?`;
    return await pool(query, [id]);
}

exports.getAllByPostsId=async(id)=>{
    const query=`SELECT * FROM comment WHERE posts_id=?`;
    return await pool(query,[id]);
}