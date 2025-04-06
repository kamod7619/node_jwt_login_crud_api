-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2025 at 02:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `age` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `age`, `created_at`) VALUES
(1, 'John Doe', 'john@example.com', NULL, '30', '2025-04-06 08:06:28'),
(2, 'John Doe', 'john@example.com', NULL, '30', '2025-04-06 08:06:46'),
(3, 'John Doe', 'john@example.com', NULL, '30', '2025-04-06 08:06:47'),
(4, 'John Doe', 'john@example.com', NULL, '30', '2025-04-06 08:07:13'),
(5, 'John Doe', 'john@example.com', NULL, '30', '2025-04-06 08:07:28'),
(6, 'Kamod', 'kamod@example.com', NULL, '30', '2025-04-06 08:08:34'),
(7, 'Kamod1', 'kamod1@example.com', '12345678', '30', '2025-04-06 09:17:36'),
(8, 'Kamod2', 'kamod2@example.com', '$2b$10$uP3qUqz6G3nCkGizr.V4uePNPv6I1666rMEnKOuYs4t9s/XS2t6gC', '30', '2025-04-06 09:21:26'),
(9, 'Kamod2', 'kamod2@example.com', '$2b$10$OW4prLoHu30rWTM5ifJDHuQNxaHH7Sw2Edd4pgQRp1dGodgX6j0yC', '30', '2025-04-06 09:31:09'),
(10, 'Kamod2', 'kamod2@example.com', '$2b$10$7B/P15wacqdtE6fFSqOuruQFEDlVWCqUpCD743E36vgzkW.KcFjUC', '30', '2025-04-06 09:31:27'),
(11, 'Kamod3', 'kamod3@example.com', '$2b$10$X4fbw6zC5o43Lr57/C8BiuLrRuDx/Npp.paP1vCU6uLVAim5uRswC', '30', '2025-04-06 09:31:51');

-- --------------------------------------------------------

--
-- Table structure for table `user_tokens`
--

CREATE TABLE `user_tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user_tokens`
--

INSERT INTO `user_tokens` (`id`, `user_id`, `token`, `status`, `created_at`) VALUES
(1, 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzQzOTM3MDE3LCJleHAiOjE3NDM5NDA2MTd9.ny7QqFiJr5z5IbxtIrOCVqRgQ5kHa6i3XPWK6cb05vU', 0, '2025-04-06 10:56:57'),
(2, 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzQzOTM3ODgwLCJleHAiOjE3NDM5NDE0ODB9.LzDOWUZdWIJxndohnIPOpD6HWKsUzO5Fpk-1jQgqMDs', 0, '2025-04-06 11:11:20'),
(3, 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzQzOTM4NDc3LCJleHAiOjE3NDM5NDIwNzd9.l-2OQ03fJPLtTRvxzf2aIVhnrhV04rNY2WxlrUafHI0', 0, '2025-04-06 11:21:17'),
(4, 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzQzOTQwMDA3LCJleHAiOjE3NDM5NDM2MDd9.TFQpct_sobTpbOtnU9dCN4G5qWXTMa5zcIpv9jG_GnI', 1, '2025-04-06 11:46:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_tokens`
--
ALTER TABLE `user_tokens`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user_tokens`
--
ALTER TABLE `user_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
