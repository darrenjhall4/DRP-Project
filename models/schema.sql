-- Drops the nat_parks_db if it exists currently --
DROP DATABASE IF EXISTS nat_parks_db;
-- Creates the "nat_parks_db" database --
CREATE DATABASE nat_parks_db;
USE nat_parks_db;

CREATE TABLE parks
(
    id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
    latitude DECIMAL(8,6),
    longitude DECIMAL(8,6),
    /*park_id
    description
    PRIMARY KEY(id)*/

)