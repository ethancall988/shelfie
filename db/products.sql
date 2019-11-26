create table products (
    id int auto_increment,
    name varchar(255) not null,
    price int default 0,
    image_url varchar(255),
    primary key id
) 