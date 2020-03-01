-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2020 at 06:37 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boom`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank_acc`
--

CREATE TABLE `bank_acc` (
  `bank_name` varchar(100) NOT NULL,
  `acc_no` varchar(100) NOT NULL,
  `balance` int(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank_acc`
--

INSERT INTO `bank_acc` (`bank_name`, `acc_no`, `balance`, `email`) VALUES
('a', 'a123', 1000, 'q'),
('b', 'd123', 1000, 'q');

-- --------------------------------------------------------

--
-- Table structure for table `promo`
--

CREATE TABLE `promo` (
  `p_name` varchar(100) NOT NULL,
  `s_date` date NOT NULL,
  `e_date` date NOT NULL,
  `n_times` int(100) NOT NULL,
  `amount` int(100) NOT NULL,
  `percent` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `promo`
--

INSERT INTO `promo` (`p_name`, `s_date`, `e_date`, `n_times`, `amount`, `percent`) VALUES
('q', '1999-01-01', '3000-12-30', 8, 200, 0),
('a', '0000-00-00', '0000-00-00', 4, 1000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `promo_user`
--

CREATE TABLE `promo_user` (
  `email` varchar(11) NOT NULL,
  `p_name` varchar(11) NOT NULL,
  `n_times` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `promo_user`
--

INSERT INTO `promo_user` (`email`, `p_name`, `n_times`) VALUES
('0', '0', 0),
('w', 'q', 9);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `u_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `wallet_balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`u_name`, `email`, `password`, `wallet_balance`) VALUES
('0', '0', '0', 0),
('q', 'q', 'q', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
