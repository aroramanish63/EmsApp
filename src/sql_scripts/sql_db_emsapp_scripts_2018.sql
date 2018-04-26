CREATE DATABASE IF NOT EXISTS `emsapp`;

USE `emsapp`;

CREATE TABLE IF NOT EXISTS category (
    `id` CHAR(36), 
    `name` VARCHAR(255) DEFAULT NULL, 
    `date_entered` DATETIME DEFAULT NULL,
    `date_modified` DATETIME DEFAULT NULL,
    `created_by` CHAR(36) DEFAULT NULL,
    `modified_by` CHAR(36) DEFAULT NULL,
    `deleted` TINYINT(1) DEFAULT '0',
    `decription` TEXT DEFAULT NULL,
    `status` CHAR(10) DEFAULT NULL,
    PRIMARY KEY(id)
);