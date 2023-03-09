DROP DATABASE IF EXISTS `twitter`;
CREATE DATABASE `twitter`;
USE `twitter`;

-- MEDIA

CREATE TABLE `media_type`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `creation` DATETIME NOT NULL,
    primary key (`id`)
);

CREATE TABLE `media`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` BLOB NOT NULL,
    `type` INT NOT NULL,
    `creation` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`type`) references `media_type`(`id`)
);

-- USER

CREATE TABLE `user`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `bio` VARCHAR(255) NOT NULL,
    `avatar` INT NULL,
    `banner` INT NULL,
    `location` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL,
    `birthdate` DATE NOT NULL,
    `certification` INT NULL,
    `pinned` INT NULL,
    `creation` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`avatar`) references `media`(`id`),
    foreign key (`banner`) references `media`(`id`)
);

-- STATUS

CREATE TABLE `status`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(255) NOT NULL,
    `author` INT NOT NULL,
    `parent` INT NULL,
    `creation` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`author`) references `user`(`id`),
    foreign key (`parent`) references `status`(`id`)
);
ALTER TABLE `user` ADD CONSTRAINT `user_pinned` FOREIGN KEY (`pinned`) REFERENCES `status`(`id`);

CREATE TABLE `status_media`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `media` INT NOT NULL,
    `status` INT NOT NULL,
    `creation` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`media`) references `media`(`id`),
    foreign key (`status`) references `status`(`id`)
);

-- MESSAGE

CREATE TABLE `reaction`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `image` INT NOT NULL,
    `creation` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`image`) references `media`(`id`)
);

CREATE TABLE `message`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(255) NOT NULL,
    `sender` INT NOT NULL,
    `reciever` INT NOT NULL,
    `media` INT NOT NULL,
    `date` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`sender`) references `user`(`id`),
    foreign key (`reciever`) references `user`(`id`),
    foreign key (`media`) references `media`(`id`)
);

CREATE TABLE `message_reaction`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `message` INT NOT NULL,
    `reaction` INT NOT NULL,
    `author` INT NOT NULL,
    `date` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`message`) references `message`(`id`),
    foreign key (`reaction`) references `reaction`(`id`),
    foreign key (`author`) references `user`(`id`)
);

-- INTERACTION

CREATE TABLE `interaction_type`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `creation` DATETIME NOT NULL,
    primary key (`id`)
);

CREATE TABLE `interaction`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `author` INT NOT NULL,
    `status` INT NOT NULL,
    `type` INT NOT NULL,
    `date` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`author`) references `user`(`id`),
    foreign key (`status`) references `status`(`id`),
    foreign key (`type`) references `interaction_type`(`id`)
);

-- LIST

CREATE TABLE `list`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `author` INT NOT NULL,
    `creation` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`author`) references `user`(`id`)
);

CREATE TABLE `list_user`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `list` INT NOT NULL,
    `user` INT NOT NULL,
    `date` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`list`) references `list`(`id`),
    foreign key (`user`) references `user`(`id`)
);

-- OTHERS

CREATE TABLE `relation`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `follower` INT NOT NULL,
    `following` INT NOT NULL,
    `date` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`follower`) references `user`(`id`),
    foreign key (`following`) references `user`(`id`)
);

CREATE TABLE `mention`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `author` INT NOT NULL,
    `target` INT NOT NULL,
    `status` INT NOT NULL,
    `date` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`author`) references `user`(`id`),
    foreign key (`target`) references `user`(`id`),
    foreign key (`status`) references `status`(`id`)
);

-- HASHTAG

CREATE TABLE `hashtag`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(255) NOT NULL,
    `date` DATETIME NOT NULL,
    primary key (`id`)
);

CREATE TABLE `status_hashtag`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `status` INT NOT NULL,
    `hashtag` INT NOT NULL,
    `date` DATETIME NOT NULL,
    primary key (`id`),
    foreign key (`status`) references `status`(`id`),
    foreign key (`hashtag`) references `hashtag`(`id`)
);