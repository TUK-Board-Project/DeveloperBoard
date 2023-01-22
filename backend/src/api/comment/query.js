const { pool } = require('../../data/database');

exports.createComment = async (user_id, posts_id, contents) => {
    const query = `INSERT INTO comment(user_id, posts_id, contents) VALUES (?, ?, ?);`
    return await pool(query, [user_id, posts_id, contents]);
}

exports.getComment = async (id) => {
    const query = `SELECT * FROM comment WHERE id = ?`;
    let result = await pool(query, [id]);
    return (result.lenth < 0) ? null : result[0]
}

exports.deleteComment = async (id) => {
    const query = `DELETE FROM comment WHERE id = ?`;
    return await pool(query, [id]);
}
