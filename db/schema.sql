
CREATE DATABASE foods;
USE foods;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date Timestamp,
	PRIMARY KEY (id)
);