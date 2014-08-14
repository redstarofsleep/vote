CREATE DATABASE  IF NOT EXISTS `votedev` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `votedev`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 192.168.18.96    Database: votedev
-- ------------------------------------------------------
-- Server version	5.5.35-0ubuntu0.12.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `useritem`
--

DROP TABLE IF EXISTS `useritem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `useritem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userVoteId` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USERITEM_ITEMID_idx` (`itemId`),
  KEY `FK_USERITEM_USERVOTEID_idx` (`userVoteId`),
  CONSTRAINT `FK_USERITEM_USERVOTEID` FOREIGN KEY (`userVoteId`) REFERENCES `uservote` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_USERITEM_ITEMID` FOREIGN KEY (`itemId`) REFERENCES `voteitem` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `uservote`
--

DROP TABLE IF EXISTS `uservote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `uservote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `voteId` int(11) NOT NULL,
  `voteTime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USERID_idx` (`userId`),
  KEY `FK_VOTEID_idx` (`voteId`),
  CONSTRAINT `FK_USERVOTE_VOTEID` FOREIGN KEY (`voteId`) REFERENCES `vote` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_USERVOTE_USERID` FOREIGN KEY (`userId`) REFERENCES `voteuser` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vote`
--

DROP TABLE IF EXISTS `vote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `itemSelMax` int(11) DEFAULT NULL,
  `itemSelMin` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `voteitem`
--

DROP TABLE IF EXISTS `voteitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `voteitem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  `voteId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_VOTEID_idx` (`voteId`),
  CONSTRAINT `FK_VOTEID` FOREIGN KEY (`voteId`) REFERENCES `vote` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `voteuser`
--

DROP TABLE IF EXISTS `voteuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `voteuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-08-14 16:56:39
