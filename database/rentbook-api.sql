-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 24, 2020 at 12:10 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentbook-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id_book` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `released_date` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `id_genre` int(255) NOT NULL,
  `available` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id_book`, `title`, `description`, `released_date`, `img`, `id_genre`, `available`) VALUES
(1, 'Dilan 1990', 'Dia adalah Dilanku Tahun 1990 edisi 1 berwarna biru muda dengan tokoh Dilan dan sepeda motornya yang dijadikan covernya.  Nah, gambar Dilan yang menggunakan seragam SMA dengan gaya yang sangat santai  yang terletak di Cover diilustrasikan sendiri  oleh sang penulis Pidi Baiq. Gambar yang terdapat di cover menjadi ciri dari isi novel yang menggambarkan kehidupan remaja. Dibawah gambar Dilan tercantum quotes Pidi Baiq menambah kesan menarik bagi sampulnya.', '2014-01-01', 'https://i2.wp.com/bukubiruku.com/wp-content/uploads/2016/11/resensi-novel-dilan-a.jpg?resize=519%2C520&ssl=1', 6, 'true'),
(2, 'Milea: Suara dari Dilan', 'Milea, Suara dari Dilan adalah sebuah novel karya Pidi Baiq yang diterbitkan oleh Pastel Books pada tahun 2016. Novel tersebut adalah sekuel dari novel Dilan: Dia adalah Dilanku Tahun 1990 dan Dilan Bagian Kedua: Dia adalah Dilanku Tahun 1991.', '2016-01-01', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/9/10/282401/282401_209ff755-2a6b-4b62-96bd-b356f45b4f8d.jpg', 6, 'true'),
(44, 'Negeri 5 Menara', 'adalah roman karya Ahmad Fuadi yang diterbitkan oleh Gramedia pada tahun 2009. Novel ini bercerita tentang kehidupan 6 santri dari 6 daerah yang berbeda menuntut ilmu di Pondok Madani (PM) Ponorogo Jawa Timur yang jauh dari rumah dan berhasil mewujudkan mimpi menggapai jendela dunia.', '2009-07-01', 'https://bulelengkab.go.id/assets/instansikab/72/artikel/resensi-buku-inilah-hebatnya-novel-negeri-5-menara-41.jpg', 5, 'true'),
(52, 'Harry Potter dan Batu Bertuah', 'Harry Potter dan Batu Bertuah adalah novel pertama dalam seri Harry Potter karangan J.K. Rowling yang akan terdiri dari tujuh buku dan menampilkan Harry Potter, seorang penyihir muda. Buku ini terdiri dari 17 bab yg menggambarkan bagaimana Harry mengetahui bahwa dia adalah seorang penyihir, membuat teman akrab dan beberapa musuh di Sekolah Ilmu Gaib dan Ilmu Sihir Hogwarts, dan dengan pertolongan teman-temannya menghalangi kembalinya penyihir jahat Voldemort, yang membunuh orang tua Harry dan mencoba untuk membunuh Harry ketika dia masih berumur satu tahun.', '1998-09-01', 'https://upload.wikimedia.org/wikipedia/id/thumb/2/2c/Harry_Potter_and_the_Philosopher%27s_Stone.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone.jpg', 1, 'true'),
(53, 'Harry Potter dan Kamar Rahasia', 'Harry Potter dan Kamar Rahasia (judul bahasa Inggris: Harry Potter and the Chamber of Secrets) adalah sekuel dari Harry Potter dan Batu Bertuah. Buku ini merupakan buku kedua dari ketujuh seri novel Harry Potter. Di Indonesia, buku ini dirilis pada bulan November 2000, sementara versi aslinya dalam bahasa Inggris pada 2 Juli 1998 di Inggris Raya dan 2 Juni 1999 di Amerika Serikat. Film berdasarkan novel ini dirilis pada November 2002.', '1998-07-02', 'https://upload.wikimedia.org/wikipedia/id/4/49/Sampul_buku_Harry_Potter_dan_Kamar_Rahasia.jpg', 1, 'true'),
(54, 'Harry Potter dan Tawanan Azkaban', 'Harry Potter dan Tawanan Azkaban (judul bahasa Inggris: Harry Potter and the Prisoner of Azkaban) adalah buku ketiga dari seri novel Harry Potter oleh J. K. Rowling. Buku ini diluncurkan pada Maret 2001 di Indonesia. Buku ini pertama kali diluncurkan dalam bahasa Inggris pada 8 Juli 1999 di negara Inggris, sementara di Amerika Serikat pada 8 September 1999. Sebuah film berdasarkan buku ini dirilis pada 31 Mei 2004 di Inggris dan 4 Juni 2004 di Amerika Serikat dan di seluruh dunia.\n\nHanya dalam seri ketiga ini, Lord Voldemort tidak dimunculkan dalam bentuk apa pun.', '1999-09-01', 'https://upload.wikimedia.org/wikipedia/id/thumb/1/11/Prisoner_of_Azkaban_cover.jpg/220px-Prisoner_of_Azkaban_cover.jpg', 1, 'true');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id_genre` int(11) NOT NULL,
  `name_genre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id_genre`, `name_genre`) VALUES
(1, 'Novel'),
(2, 'Action'),
(3, 'Horor'),
(4, 'Fiction'),
(5, 'Roman'),
(6, 'Romance');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `salt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `email`, `fullname`, `username`, `password`, `salt`) VALUES
(1, 'yaelah@gmail.com', 'Alan', 'yaelah', 'e4d65a3f022f3fbe8b8fe2b0e9545673995482f5a6f8021cd975724c0d6cda47', '289c4a789ad12a60052e'),
(2, 'alan@gmail.com', 'alan nugraha', 'alan', 'e96156c2b213570852a06781f71023843a01c80fd1222e68281d4174e145af7e', 'ad9eb50b478195100386'),
(3, 'test@gmail.com', 'test', 'test', 'e5e5a0fd69700fef71b594f10c511becf6f8f3a45a46eb46003a434fdd1a9038', '80f36971ac2ca2b046d7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id_book`),
  ADD KEY `book_ibfk_1` (`id_genre`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id_genre`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id_genre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id_genre`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
