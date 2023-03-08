CREATE TABLE `reaction`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `image` INT NOT NULL,
    `creation` DATETIME NOT NULL
);
ALTER TABLE
    `reaction` ADD PRIMARY KEY `reaction_id_primary`(`id`);
CREATE TABLE `list`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `author` INT NOT NULL,
    `creation` DATETIME NOT NULL
);
ALTER TABLE
    `list` ADD PRIMARY KEY `list_id_primary`(`id`);
CREATE TABLE `status`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(255) NOT NULL,
    `author` INT NOT NULL,
    `parent` INT NULL,
    `creation` DATETIME NOT NULL
);
ALTER TABLE
    `status` ADD PRIMARY KEY `status_id_primary`(`id`);
CREATE TABLE `list_user`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `list` INT NOT NULL,
    `user` INT NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `list_user` ADD PRIMARY KEY `list_user_id_primary`(`id`);
CREATE TABLE `message`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(255) NOT NULL,
    `sender` INT NOT NULL,
    `reciever` INT NOT NULL,
    `media` INT NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `message` ADD PRIMARY KEY `message_id_primary`(`id`);
CREATE TABLE `relation`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `follower` INT NOT NULL,
    `following` INT NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `relation` ADD PRIMARY KEY `relation_id_primary`(`id`);
CREATE TABLE `mention`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `author` INT NOT NULL,
    `target` INT NOT NULL,
    `status` INT NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `mention` ADD PRIMARY KEY `mention_id_primary`(`id`);
CREATE TABLE `status_media`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `media` INT NOT NULL,
    `status` INT NOT NULL,
    `creation` DATETIME NOT NULL
);
ALTER TABLE
    `status_media` ADD PRIMARY KEY `status_media_id_primary`(`id`);
CREATE TABLE `user`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
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
    `creation` DATETIME NOT NULL
);
ALTER TABLE
    `user` ADD PRIMARY KEY `user_id_primary`(`id`);
ALTER TABLE
    `user` ADD UNIQUE `user_username_unique`(`username`);
CREATE TABLE `message_reaction`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `message` INT NOT NULL,
    `reaction` INT NOT NULL,
    `author` INT NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `message_reaction` ADD PRIMARY KEY `message_reaction_id_primary`(`id`);
CREATE TABLE `interaction_type`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `creation` DATETIME NOT NULL
);
ALTER TABLE
    `interaction_type` ADD PRIMARY KEY `interaction_type_id_primary`(`id`);
CREATE TABLE `media`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` BLOB NOT NULL,
    `type` BIGINT NOT NULL,
    `creation` DATETIME NOT NULL
);
ALTER TABLE
    `media` ADD PRIMARY KEY `media_id_primary`(`id`);
CREATE TABLE `interaction`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `author` BIGINT NOT NULL,
    `status` BIGINT NOT NULL,
    `type` BIGINT NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `interaction` ADD PRIMARY KEY `interaction_id_primary`(`id`);
CREATE TABLE `media_type`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `creation` DATETIME NOT NULL
);
ALTER TABLE
    `media_type` ADD PRIMARY KEY `media_type_id_primary`(`id`);
ALTER TABLE
    `media` ADD CONSTRAINT `media_type_foreign` FOREIGN KEY(`type`) REFERENCES `media_type`(`id`);
ALTER TABLE
    `message` ADD CONSTRAINT `message_reciever_foreign` FOREIGN KEY(`reciever`) REFERENCES `user`(`id`);
ALTER TABLE
    `status_media` ADD CONSTRAINT `status_media_media_foreign` FOREIGN KEY(`media`) REFERENCES `media`(`id`);
ALTER TABLE
    `message_reaction` ADD CONSTRAINT `message_reaction_author_foreign` FOREIGN KEY(`author`) REFERENCES `user`(`id`);
ALTER TABLE
    `interaction` ADD CONSTRAINT `interaction_type_foreign` FOREIGN KEY(`type`) REFERENCES `interaction_type`(`id`);
ALTER TABLE
    `message` ADD CONSTRAINT `message_sender_foreign` FOREIGN KEY(`sender`) REFERENCES `user`(`id`);
ALTER TABLE
    `interaction` ADD CONSTRAINT `interaction_status_foreign` FOREIGN KEY(`status`) REFERENCES `status`(`id`);
ALTER TABLE
    `interaction` ADD CONSTRAINT `interaction_author_foreign` FOREIGN KEY(`author`) REFERENCES `user`(`id`);
ALTER TABLE
    `mention` ADD CONSTRAINT `mention_target_foreign` FOREIGN KEY(`target`) REFERENCES `user`(`id`);
ALTER TABLE
    `mention` ADD CONSTRAINT `mention_status_foreign` FOREIGN KEY(`status`) REFERENCES `status`(`id`);
ALTER TABLE
    `status_media` ADD CONSTRAINT `status_media_status_foreign` FOREIGN KEY(`status`) REFERENCES `status`(`id`);
ALTER TABLE
    `relation` ADD CONSTRAINT `relation_follower_foreign` FOREIGN KEY(`follower`) REFERENCES `user`(`id`);
ALTER TABLE
    `mention` ADD CONSTRAINT `mention_author_foreign` FOREIGN KEY(`author`) REFERENCES `user`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_banner_foreign` FOREIGN KEY(`banner`) REFERENCES `media`(`id`);
ALTER TABLE
    `status` ADD CONSTRAINT `status_author_foreign` FOREIGN KEY(`author`) REFERENCES `user`(`id`);
ALTER TABLE
    `message_reaction` ADD CONSTRAINT `message_reaction_reaction_foreign` FOREIGN KEY(`reaction`) REFERENCES `reaction`(`id`);
ALTER TABLE
    `list` ADD CONSTRAINT `list_id_foreign` FOREIGN KEY(`id`) REFERENCES `user`(`id`);
ALTER TABLE
    `list_user` ADD CONSTRAINT `list_user_user_foreign` FOREIGN KEY(`user`) REFERENCES `user`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_avatar_foreign` FOREIGN KEY(`avatar`) REFERENCES `media`(`id`);
ALTER TABLE
    `message_reaction` ADD CONSTRAINT `message_reaction_message_foreign` FOREIGN KEY(`message`) REFERENCES `message`(`id`);
ALTER TABLE
    `list` ADD CONSTRAINT `list_id_foreign` FOREIGN KEY(`id`) REFERENCES `list_user`(`id`);
ALTER TABLE
    `relation` ADD CONSTRAINT `relation_following_foreign` FOREIGN KEY(`following`) REFERENCES `user`(`id`);