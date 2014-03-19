-- phpMyAdmin SQL Dump
-- version 4.0.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 19, 2014 at 11:57 PM
-- Server version: 5.5.31
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `SPDX`
--
CREATE DATABASE IF NOT EXISTS `SPDX` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `SPDX`;

-- --------------------------------------------------------

--
-- Table structure for table `creators`
--

CREATE TABLE IF NOT EXISTS `creators` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `generated_at` datetime NOT NULL,
  `creator_comments` text NOT NULL,
  `license_list_version` varchar(255) NOT NULL,
  `spdx_doc_id` int(11) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `doc_file_package_associations`
--

CREATE TABLE IF NOT EXISTS `doc_file_package_associations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `spdx_doc_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `package_file_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `doc_license_associations`
--

CREATE TABLE IF NOT EXISTS `doc_license_associations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `spdx_doc_id` int(11) NOT NULL,
  `license_id` int(11) NOT NULL,
  `license_identifier` varchar(255) NOT NULL,
  `license_name` varchar(255) NOT NULL,
  `license_comments` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `license`
--

CREATE TABLE IF NOT EXISTS `license` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `extracted_text` text NOT NULL,
  `license_name` varchar(255) NOT NULL,
  `osi_approved` varchar(255) NOT NULL,
  `standard_license_header` varchar(255) NOT NULL,
  `license_cross_reference` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `licensings`
--

CREATE TABLE IF NOT EXISTS `licensings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `package_file_id` int(11) NOT NULL,
  `juncture` varchar(255) NOT NULL,
  `doc_license_association_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE IF NOT EXISTS `packages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `package_name` varchar(255) NOT NULL,
  `package_file_name` varchar(255) NOT NULL,
  `package_download_location` varchar(255) NOT NULL,
  `package_copyright_text` text NOT NULL,
  `package_version` varchar(255) NOT NULL,
  `package_description` text NOT NULL,
  `package_summary` text NOT NULL,
  `package_originator` varchar(255) NOT NULL,
  `package_supplier` varchar(255) NOT NULL,
  `package_license_concluded` text,
  `package_license_declared` text,
  `package_checksum` varchar(255) NOT NULL,
  `checksum_algorithm` varchar(255) NOT NULL,
  `package_home_page` varchar(255) NOT NULL,
  `package_source_info` varchar(255) NOT NULL,
  `package_license_info_from_files` text NOT NULL,
  `package_license_comments` text NOT NULL,
  `package_verification_code` varchar(255) NOT NULL,
  `package_verification_code_excluded_file` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `package_files`
--

CREATE TABLE IF NOT EXISTS `package_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) NOT NULL,
  `file_type` varchar(255) NOT NULL,
  `file_copyright_text` text NOT NULL,
  `artifact_of_project_name` varchar(255) NOT NULL,
  `artifact_of_project_homepage` varchar(255) NOT NULL,
  `artifact_of_project_uri` varchar(255) NOT NULL,
  `license_concluded` varchar(255) NOT NULL,
  `license_info_in_file` text NOT NULL,
  `file_checksum` varchar(255) NOT NULL,
  `file_checksum_algorithm` varchar(255) NOT NULL,
  `relative_path` varchar(255) NOT NULL,
  `license_comments` text NOT NULL,
  `file_notice` text NOT NULL,
  `file_contributor` text NOT NULL,
  `file_dependency` text NOT NULL,
  `file_comment` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_type` varchar(255) NOT NULL,
  `product_description` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `product_url` varchar(255) NOT NULL,
  `creator` int(11) NOT NULL,
  `parent_product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `product_software`
--

CREATE TABLE IF NOT EXISTS `product_software` (
  `software_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reviewers`
--

CREATE TABLE IF NOT EXISTS `reviewers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reviewer_date` datetime NOT NULL,
  `reviewer_comment` text NOT NULL,
  `spdx_doc_id` int(11) NOT NULL,
  `reviewer` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `software`
--

CREATE TABLE IF NOT EXISTS `software` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `software_name` varchar(255) NOT NULL,
  `software_version` varchar(255) NOT NULL,
  `software_description` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `creator` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `spdx_docs`
--

CREATE TABLE IF NOT EXISTS `spdx_docs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `spdx_version` varchar(255) NOT NULL,
  `data_license` varchar(255) NOT NULL,
  `upload_file_name` varchar(255) NOT NULL,
  `upload_content_type` varchar(255) NOT NULL,
  `upload_file_size` varchar(255) NOT NULL,
  `upload_updated_at` datetime DEFAULT NULL,
  `document_comment` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
