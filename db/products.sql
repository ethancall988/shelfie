create table products (
    id serial primary key,
    name varchar(255) not null,
    price int default 0,
    image_url varchar(255)
);