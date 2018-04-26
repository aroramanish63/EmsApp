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

CREATE TABLE IF NOT EXISTS subcategory (
    `id` CHAR(36), 
    `name` VARCHAR(255) DEFAULT NULL, 
    `date_entered` DATETIME DEFAULT NULL,
    `date_modified` DATETIME DEFAULT NULL,
    `created_by` CHAR(36) DEFAULT NULL,
    `modified_by` CHAR(36) DEFAULT NULL,
    `deleted` TINYINT(1) DEFAULT '0',
    `decription` TEXT DEFAULT NULL,
    `category_id` CHAR(36) DEFAULT NULL,
    `status` CHAR(10) DEFAULT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS payment (
    `id` CHAR(36), 
    `name` VARCHAR(255) DEFAULT NULL, 
    `date_entered` DATETIME DEFAULT NULL,
    `date_modified` DATETIME DEFAULT NULL,
    `created_by` CHAR(36) DEFAULT NULL,
    `modified_by` CHAR(36) DEFAULT NULL,
    `deleted` TINYINT(1) DEFAULT '0',
    `decription` TEXT DEFAULT NULL,
    `payment_type` tinyint(2) DEFAULT '0' COMMENT '0=>Expense, 1=>Income',
    `status` CHAR(10) DEFAULT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS users (
    `id` CHAR(36), 
    `name` VARCHAR(255) DEFAULT NULL, 
    `date_entered` DATETIME DEFAULT NULL,
    `date_modified` DATETIME DEFAULT NULL,
    `created_by` CHAR(36) DEFAULT NULL,
    `modified_by` CHAR(36) DEFAULT NULL,
    `deleted` TINYINT(1) DEFAULT '0',
    `username` VARCHAR(255) DEFAULT NULL,
    `userhash` VARCHAR(255) DEFAULT NULL,
    `first_name` VARCHAR(255) DEFAULT NULL,
    `last_name` VARCHAR(255) DEFAULT NULL,
    `email_address` VARCHAR(150) DEFAULT NULL,
    `mobile_no` BIGINT(12),
    `login_by` TINYINT(5) DEFAULT '0' COMMENT '0=>Email, 1=>Gmail, 2=>Facebook',
    `status` CHAR(10) DEFAULT NULL,
    PRIMARY KEY(id)
);