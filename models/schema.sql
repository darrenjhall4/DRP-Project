-- Drops the nat_parks_db if it exists currently --
DROP DATABASE IF EXISTS nat_parks_db;
-- Creates the "nat_parks_db" database --
CREATE DATABASE nat_parks_db;
USE nat_parks_db;

CREATE TABLE parks
(
    id INT NOT NULL AUTO_INCREMENT,
	park_name varchar(100) NOT NULL,
    park_location varchar(255) NOT NULL,
    latitude DECIMAL(8,6),
    longitude DECIMAL(8,6),
    PRIMARY KEY(id)

);

SELECT * from parks;

