CREATE DATABASE IF NOT EXISTS gameapi;

USE gameapi;

CREATE TABLE IF NOT EXISTS `Publisher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `siret` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT IGNORE INTO `Publisher` (id, name, siret, phone) VALUES(1,'first publisher','0123456','1234567890'),(2,'second_publisher','321365478','9876543210'),(3,'third_publisher','74185293','7418529630');


CREATE TABLE `Game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `releaseDate` varchar(255) NOT NULL,
  `publisher` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;