CREATE DATABASE IF NOT EXISTS `emsapp`;

USE `emsapp`;

-- 26th April 2018

CREATE TABLE IF NOT EXISTS category (
    `category_id` CHAR(36), 
    `name` VARCHAR(255) DEFAULT NULL, 
    `date_entered` DATETIME DEFAULT NULL,
    `date_modified` DATETIME DEFAULT NULL,
    `created_by` CHAR(36) DEFAULT NULL,
    `modified_by` CHAR(36) DEFAULT NULL,
    `deleted` TINYINT(1) DEFAULT '0',
    `decription` TEXT DEFAULT NULL,
    `status` CHAR(10) DEFAULT 'Active' COMMENT 'Active, Inactive',
    PRIMARY KEY(category_id)
);

CREATE TABLE IF NOT EXISTS subcategory (
    `subcategory_id` CHAR(36), 
    `name` VARCHAR(255) DEFAULT NULL, 
    `date_entered` DATETIME DEFAULT NULL,
    `date_modified` DATETIME DEFAULT NULL,
    `created_by` CHAR(36) DEFAULT NULL,
    `modified_by` CHAR(36) DEFAULT NULL,
    `deleted` TINYINT(1) DEFAULT '0',
    `decription` TEXT DEFAULT NULL,
    `category_id` CHAR(36) DEFAULT NULL,
    `status` CHAR(10) DEFAULT 'Active' COMMENT 'Active, Inactive',
    PRIMARY KEY(subcategory_id)
);

CREATE TABLE IF NOT EXISTS payment (
    `payment_id` CHAR(36), 
    `name` VARCHAR(255) DEFAULT NULL, 
    `date_entered` DATETIME DEFAULT NULL,
    `date_modified` DATETIME DEFAULT NULL,
    `created_by` CHAR(36) DEFAULT NULL,
    `modified_by` CHAR(36) DEFAULT NULL,
    `deleted` TINYINT(1) DEFAULT '0',
    `decription` TEXT DEFAULT NULL,
    `payment_type` tinyint(2) DEFAULT '0' COMMENT '0=>Expense, 1=>Income',
    `amount` DOUBLE DEFAULT '0',
    `subcategory_id` CHAR(36) DEFAULT NULL,
    `status` CHAR(10) DEFAULT 'Active' COMMENT 'Active, Inactive',
    PRIMARY KEY(payment_id)
);

CREATE TABLE IF NOT EXISTS users (
    `users_id` CHAR(36), 
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
    `email_address` VARCHAR(50) DEFAULT NULL,
    `mobile_no` BIGINT(12),
    `login_mode` TINYINT(5) DEFAULT '0' COMMENT '0=>Email, 1=>Gmail, 2=>Facebook',
    `login_from_where` CHAR(15) DEFAULT 'Web' COMMENT 'Web, Mobile',
    `last_login` DATETIME DEFAULT NULL,
    `status` CHAR(10) DEFAULT 'Active' COMMENT 'Active, Inactive',
    PRIMARY KEY(users_id)
);
