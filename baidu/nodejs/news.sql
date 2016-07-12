-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-06-22 06:58:33
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phplesson`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(10) NOT NULL,
  `title` text NOT NULL,
  `descrip` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content_url` text NOT NULL,
  `pic_url` text NOT NULL,
  `classfy` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `descrip`, `time`, `content_url`, `pic_url`, `classfy`) VALUES
(4, '检察机关对仇和、杨卫泽、武长顺等五案提起公诉', '检察机关对仇和、杨卫泽、武长顺等五案提起公诉', '2016-06-19 08:04:20', 'http://www.cankaoxiaoxi.com/roll10/20160603/1180833.shtml', 'http://upload.cankaoxiaoxi.com/2016/0603/1464923271852.jpg', 'modify'),
(5, '这些职业资格被取消了 还掏钱花时间去考？', '这些职业资格被取消了 还掏钱花时间去考？', '2016-06-19 08:04:20', 'http://shehui.rmzxb.com.cn/c/2016-06-03/848823.shtml', 'http://shehui.rmzxb.com.cn/upload/resources/image/2016/06/03/580115_500x500.jpg', 'baijia'),
(6, '陕西安康副市长病逝', '陕西安康副市长病逝：上千人悼念 一群环卫工大哭', '2016-06-19 08:04:20', 'http://www.cankaoxiaoxi.com/roll10/20160603/1180332.shtml', 'http://upload.cankaoxiaoxi.com/2016/0603/1464907264325.jpg', 'baijia'),
(7, '最担心的事发生了：教室电风扇掉落砸伤学生', '最担心的事发生了：教室电风扇掉落砸伤学生', '2016-06-19 08:04:20', 'http://society.huanqiu.com/article/2016-06/9007305.html?from=bdwz', 'http://himg2.huanqiu.com/attachment2010/2016/0603/20160603102652343.jpg', 'modify'),
(8, '苏州一公司奇葩规定：未满30岁女职员不能生育', '苏州一公司奇葩规定：未满30岁女职员不能生育', '2016-06-19 08:04:20', 'http://cn.chinagate.cn/news/2016-06/03/content_38594964.htm', 'http://images.chinagate.cn/attachement/jpg/site1020/20160603/c89cdcae397618bb5a814b.jpg', 'modify'),
(142, '香港楼市下跌，内地炒楼客结局惨烈', '香港楼市下跌，内地炒楼客结局惨烈', '2016-06-19 08:04:20', 'http://mojinglong.baijia.baidu.com/article/487158', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=fdd6d1f2def9d72a1764131eec28282a/96dda144ad345982552d505f0bf431adcaef845c.jpg', 'modify'),
(143, '联想巨亏', '联想最愁的并不是亏了8亿，而在上哪找翻身利器', '2016-06-19 08:04:20', 'http://dtcaijing.baijia.baidu.com/article/487182', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C118%2C1601%2C961%3Bw%3D638/sign=8d470008c13d70cf58b5f04dc5ecfd31/e850352ac65c1038a13a9cf3ba119313b07e89bf.jpg', 'baijia'),
(144, '以色列创新产业考察手记（上）——国与人', '以色列创新产业考察手记（上）——国与人', '2016-06-19 08:04:20', 'http://wangguanxiong.baijia.baidu.com/article/486884', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=9105023e6f09c93d07f20df4a73df8bb/38dbb6fd5266d0165136d6189f2bd40735fa35d6.jpg', 'baijia'),
(145, '今年以来，已有32家新三板企业遭行政处罚', '今年以来，已有32家新三板企业遭行政处罚', '2016-06-19 08:04:20', 'http://x3bf.baijia.baidu.com/article/486762', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C91%2C936%2C562%3Bw%3D638/sign=9691f8fdf4039245b5fabb4fbaa488fb/f11f3a292df5e0fecc7a8731546034a85edf729b.jpg', 'baijia'),
(150, '搜索', '委屈委屈', '2016-06-22 04:51:13', '阿达', '萨阿迪', 'modify');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
