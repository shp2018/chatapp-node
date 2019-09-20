CREATE DATABASE IF NOT EXISTS chatapp;
USE chatapp;

CREATE TABLE user(
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255),
    password TEXT,
    PRIMARY KEY (id)
);


