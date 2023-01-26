const { pool } = require('../../data/database');

exports.create = async (name, path, posts_id) => {
    const query = `INSERT INTO image(file_name, file_path, posts_id) VALUES (?, ?, ?)`;
    return await pool(query, [name, path, posts_id]);
}

exports.show = async (id) => {
    const query = `SELECT * FROM image WHERE id = ?`;
    let result = await pool(query, [id]);
    return (result.lenth < 0) ? null : result[0];
}

exports.findByPosts = async (posts_id) => {
    const query = `SELECT * FROM image WHERE posts_id = ?`;
    let result = await pool(query, [posts_id]);
    return (result.lenth < 0) ? null : result[0];
}

exports.deleteOne = async (id) => {
    const query = `DELETE FROM image WHERE id = ?`;
    return await pool(query, [id]);
}
