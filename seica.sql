-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-07-2018 a las 07:48:08
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `seica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `codcliente` varchar(10) NOT NULL,
  `cliente` varchar(35) NOT NULL,
  `ciucliente` varchar(30) NOT NULL,
  `estcliente` varchar(30) NOT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`codcliente`, `cliente`, `ciucliente`, `estcliente`, `telefono`) VALUES
('21535032', 'DANNY LARA', 'CARACAS', 'DISTRITO CAPITAL', 2147483647),
('404026045', 'CREACIONES MARIA TERESA LARA C.A', 'CARACAS', 'DISTRITO CAPITAL', 2128724054);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matplanta`
--

CREATE TABLE `matplanta` (
  `codplanta` varchar(20) NOT NULL,
  `nomplanta` varchar(30) NOT NULL,
  `existencia` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `matplanta`
--

INSERT INTO `matplanta` (`codplanta`, `nomplanta`, `existencia`, `descripcion`) VALUES
('PUN901', 'PUNTA DEPORTIVA NIÑO', 4500, 'PLANTA COMPRADA A NEW SUELA CON NUMERACION ESTANDAR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matprima`
--

CREATE TABLE `matprima` (
  `codmaterial` varchar(20) NOT NULL,
  `nommaterial` varchar(30) NOT NULL,
  `color` varchar(30) NOT NULL,
  `existencia` float NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `matprima`
--

INSERT INTO `matprima` (`codmaterial`, `nommaterial`, `color`, `existencia`, `descripcion`) VALUES
('SIM_BLANCO_MARFIL', 'BLANCO_MARFIL', 'BLANCO_M', 23.6, 'COLOR BLANCO MARFIL COMPRADO EN NINFA  EL 19/07/18'),
('SIM_NEGRO_RAYADO', 'NEGRO_RAYADO', 'NG_RY', 74.5, 'NEGRO RAYADO DE PRIMERA'),
('SIM_ROJO', 'ROJO SINTETICO', 'ROJO_SIN', 88, 'MATERIAL COMPRADO EN NINFA'),
('SIM_ROJO_CUERITO', 'ROJO CUERITO', 'ROJO_C', 90.5, 'MATERIAL DE PRIMERA COMPRADO EN NINFA 07-07-2018');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produccion`
--

CREATE TABLE `produccion` (
  `ticketpro` int(11) NOT NULL,
  `tcalzado` varchar(10) NOT NULL,
  `fechacrea` date NOT NULL,
  `modelo` varchar(15) NOT NULL,
  `cliente` varchar(35) DEFAULT NULL,
  `color1` varchar(30) NOT NULL,
  `color2` varchar(30) NOT NULL,
  `pares` int(11) NOT NULL,
  `notas` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  `cortada` tinyint(1) DEFAULT NULL,
  `fechacort` date DEFAULT NULL,
  `marcada` tinyint(1) DEFAULT NULL,
  `fechamarca` date DEFAULT NULL,
  `costura` tinyint(1) DEFAULT NULL,
  `fechacost` date DEFAULT NULL,
  `montura` tinyint(1) DEFAULT NULL,
  `fechamon` date DEFAULT NULL,
  `soleteada` tinyint(1) DEFAULT NULL,
  `fechasole` date DEFAULT NULL,
  `encajada` tinyint(1) DEFAULT NULL,
  `fechaenca` date DEFAULT NULL,
  `completado` tinyint(1) DEFAULT NULL,
  `fechacomp` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `produccion`
--

INSERT INTO `produccion` (`ticketpro`, `tcalzado`, `fechacrea`, `modelo`, `cliente`, `color1`, `color2`, `pares`, `notas`, `status`, `cortada`, `fechacort`, `marcada`, `fechamarca`, `costura`, `fechacost`, `montura`, `fechamon`, `soleteada`, `fechasole`, `encajada`, `fechaenca`, `completado`, `fechacomp`) VALUES
(1000, 'DAMA', '2018-07-19', '905E', '', 'BLANCO_M', 'BLANCO_M', 15, 1, 'COMPLETADO', 1, '2018-07-21', 1, '2018-07-21', 1, '2018-07-21', 1, '2018-07-21', 1, '2018-07-21', 1, '2018-07-21', 1, '2018-07-21'),
(1001, 'DAMA', '2018-07-19', '905P', '', 'BLANCO_M', 'BLANCO_M', 15, 1, 'COMPLETADO', 1, '2018-07-22', 1, '2018-07-22', 1, '2018-07-22', 1, '2018-07-22', 1, '2018-07-22', 1, '2018-07-22', 1, '2018-07-22'),
(1002, 'DAMA', '2018-07-22', '905P', '', 'ROJO_SIN', 'NG_RY', 15, 1, 'CORTADO', 1, NULL, 0, NULL, 0, NULL, 0, NULL, 0, NULL, 0, NULL, 0, '0000-00-00'),
(1003, 'DAMA', '2018-07-23', '905P', '', 'BLANCO_M', 'NG_RY', 15, 1, 'MARCADO', 1, '2018-07-23', 1, '2018-07-24', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1004, 'DAMA', '2018-07-25', '905P', '', 'BLANCO_M', 'BLANCO_M', 30, 1, 'COMPLETADO', 1, '2018-07-25', 1, '2018-07-25', 1, '2018-07-25', 1, '2018-07-25', 1, '2018-07-25', 1, '2018-07-25', 1, '2018-07-25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terminado`
--

CREATE TABLE `terminado` (
  `codterminado` int(11) NOT NULL,
  `ticketpro` int(11) NOT NULL,
  `tcalzado` varchar(10) NOT NULL,
  `modelo` varchar(15) NOT NULL,
  `color1` varchar(30) NOT NULL,
  `color2` varchar(30) NOT NULL,
  `pares` int(11) NOT NULL,
  `notas` int(11) NOT NULL,
  `fechacomp` date NOT NULL,
  `cliente` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `terminado`
--

INSERT INTO `terminado` (`codterminado`, `ticketpro`, `tcalzado`, `modelo`, `color1`, `color2`, `pares`, `notas`, `fechacomp`, `cliente`) VALUES
(1, 9000, 'DAMA', '905P', 'BLANCO', 'ROJO', 15, 1, '2018-07-19', NULL),
(3, 100, 'DAMA', '905P', 'BLANCO_M', 'BLANCO_M', 15, 1, '2018-07-19', ''),
(4, 101, 'DAMA', '905P', 'BLANCO_M', 'BLANCO_M', 15, 1, '2018-07-22', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `usuario` varchar(10) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `cedula` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`usuario`, `password`, `nombre`, `apellido`, `cedula`, `email`, `telefono`) VALUES
('xertakiz', '$2a$10$5jvl74Co.2.Zbr/2gaBBleGR9TnSmNIw1aDCPLX0LvKopFN.89LLu', 'Danny', 'Lara', 21535032, 'Danny33609@hotmail.com', 2128724054);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`codcliente`);

--
-- Indices de la tabla `matplanta`
--
ALTER TABLE `matplanta`
  ADD PRIMARY KEY (`codplanta`);

--
-- Indices de la tabla `matprima`
--
ALTER TABLE `matprima`
  ADD PRIMARY KEY (`codmaterial`);

--
-- Indices de la tabla `produccion`
--
ALTER TABLE `produccion`
  ADD PRIMARY KEY (`ticketpro`);

--
-- Indices de la tabla `terminado`
--
ALTER TABLE `terminado`
  ADD PRIMARY KEY (`codterminado`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`cedula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `produccion`
--
ALTER TABLE `produccion`
  MODIFY `ticketpro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1005;

--
-- AUTO_INCREMENT de la tabla `terminado`
--
ALTER TABLE `terminado`
  MODIFY `codterminado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
