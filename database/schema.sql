CREATE DATABASE IF NOT EXISTS sigsa;

USE sigsa;


DROP TABLE IF EXISTS `restaurants`;

CREATE TABLE `restaurants` (
  `restaurant_id` varchar(255) NOT NULL,
  `restaurant_name` varchar(255) default NULL
);


DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_name` varchar(255) default NULL,
  `user_initials` varchar(255) default NULL,
  `user_location` varchar(255),
  `user_review_count` mediumint default NULL,
  `user_vip_status` varchar(255) default NULL,
  PRIMARY KEY (`user_id`)
) AUTO_INCREMENT=1;


DROP TABLE IF EXISTS `users_reviews`;

CREATE TABLE `users_reviews` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_id` mediumint default NULL,
  `review_id` mediumint default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;


DROP TABLE IF EXISTS `restaurants_reviews`;

CREATE TABLE `restaurants_reviews` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `restaurant_id` varchar(255) default NULL,
  `review_id` mediumint default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;


DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `review_id` mediumint NOT NULL,
  `dine_date` varchar(255),
  `rating_overall` mediumint default NULL,
  `rating_food` mediumint default NULL,
  `rating_service` mediumint default NULL,
  `rating_ambience` mediumint default NULL,
  `helpful_count` mediumint default NULL,
  `body` TEXT default NULL,
  `user_id` mediumint default NULL,
  `restaurant_id` varchar(255) default NULL,
  PRIMARY KEY (`review_id`)
);
