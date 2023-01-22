const { pool } = require('../../data');

exports.create = async (name, path) => {
    const query = `INSERT INTO files(file_name, file_path) VALUES (?, ?, ?)`;
    return await pool(query, [name, path]);
}

exports.show = async (id) => {
    const query = `SELECT * FROM files WHERE id = ?`;
    let result = await pool(query, [id]);
    return (result.lenth < 0) ? null : result[0];
}

exports.deleteOne = async (id) => {
    const query = `DELETE FROM files WHERE id = ?`;
    return await pool(query, [id]);
}
