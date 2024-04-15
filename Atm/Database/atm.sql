-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2023 at 06:03 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `atm`
--

CREATE TABLE `atm` (
  `acc_no` int(50) NOT NULL,
  `balance` int(50) NOT NULL,
  `pin` int(4) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `atm`
--

INSERT INTO `atm` (`acc_no`, `balance`, `pin`, `name`) VALUES
(27, 1699, 1423, 'Hassan Ali'),
(28, 1000, 1432, 'Abdullah Arshad'),
(34, 9531, 1234, 'Shiraz Mazhar'),
(43, 10000, 1243, 'Arslan Abid'),
(81, 8955, 1111, 'Ahmed Khan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atm`
--
ALTER TABLE `atm`
  ADD PRIMARY KEY (`acc_no`),
  ADD UNIQUE KEY `pin` (`pin`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
