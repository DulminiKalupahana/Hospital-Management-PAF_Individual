-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2020 at 08:52 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospitaldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospitaldetails`
--

CREATE TABLE `hospitaldetails` (
  `hosID` int(11) NOT NULL,
  `hosName` varchar(50) DEFAULT NULL,
  `hosAddress` varchar(200) DEFAULT NULL,
  `hosContactno` int(11) DEFAULT NULL,
  `hosEmail` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hospitaldetails`
--

INSERT INTO `hospitaldetails` (`hosID`, `hosName`, `hosAddress`, `hosContactno`, `hosEmail`) VALUES
(42, 'Hemas Hospital', 'No 35,Kandy Road,Kaduwela', 118484875, 'hemasKadu@gmail.com'),
(44, 'Medi Help', 'No5,PanaduraRd,Horana', 342261111, 'medi@gmail.com'),
(52, 'Nawaloka Hospital', 'N067,Graceland,Horana', 341515152, 'nawa45@gmail.com'),
(53, 'Asiri Hospital', 'Asiri,LakeRd,Kandy', 912254545, 'asiri@gmail.com'),
(55, 'Medicare Centre', 'Medicare,Queensland,Colombo', 117474748, 'medicare@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospitaldetails`
--
ALTER TABLE `hospitaldetails`
  ADD PRIMARY KEY (`hosID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospitaldetails`
--
ALTER TABLE `hospitaldetails`
  MODIFY `hosID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
