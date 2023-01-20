const {pool} = require("./database");
const createPostsTable = `
create table if not exists posts(
    id int not null auto_increment primary key,
    user_id int not null,
    title varchar(255) not null,
    contents varchar(255) not null
);`;

exports.init = async () => {
    await pool(createPostsTable,[]);
}
