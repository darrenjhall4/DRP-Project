-- Drops the nat_parks_db if it exists currently --
DROP DATABASE IF EXISTS nat_parks_db;
-- Creates the "nat_parks_db" database --
CREATE DATABASE nat_parks_db;
USE nat_parks_db;

CREATE TABLE parks
(
    id INT NOT NULL,
	name varchar(100) NOT NULL,
    address varchar(255) NOT NULL,
    latitude DECIMAL(8,6) NOT NULL,
    longitude DECIMAL(8,6) NOT NULL,
    PRIMARY KEY (id)

);

SELECT * FROM parks;