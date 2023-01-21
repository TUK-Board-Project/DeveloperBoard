const {pool} = require("./database");
const createPostsTable = `
create table if not exists posts(
    id int not null auto_increment primary key,
    user_id int not null,
    title varchar(255) not null,
    contents varchar(255) not null,
    created_at timestamp not null default current_timestamp
);`;

const createUserTable = `
create table if not exists user(
    id int not null auto_increment primary key,
    email VARCHAR(255) not null,
    password VARCHAR(255) not null,
    name VARCHAR(255) not null,
    created_at timestamp not null default current_timestamp
);`;

exports.init = async () => {
    await pool(createPostsTable,[]);
    await pool(createUserTable, []);
}
