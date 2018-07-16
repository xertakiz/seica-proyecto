-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2018 a las 05:40:51
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
  `nomcliente` varchar(35) NOT NULL,
  `ciucliente` varchar(30) NOT NULL,
  `estcliente` varchar(30) NOT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`codcliente`, `nomcliente`, `ciucliente`, `estcliente`, `telefono`) VALUES
('21535032', 'DANNY LARA', 'CARACAS', 'DISTRITO CAPITAL', 2147483647),
('404026045', 'CREACIONES MARIA TERESA LARA C.A', 'CARACAS', 'DISTRITO CAPITAL', 2128724054);

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
('SIM_NEGRO_RAYADO', 'NEGRO_RAYADO', 'NG_RY', 74.5, 'NEGRO RAYADO DE PRIMERA'),
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
  `color3` varchar(30) NOT NULL,
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

INSERT INTO `produccion` (`ticketpro`, `tcalzado`, `fechacrea`, `modelo`, `cliente`, `color1`, `color2`, `color3`, `pares`, `notas`, `status`, `cortada`, `fechacort`, `marcada`, `fechamarca`, `costura`, `fechacost`, `montura`, `fechamon`, `soleteada`, `fechasole`, `encajada`, `fechaenca`, `completado`, `fechacomp`) VALUES
(4545, 'DAMA', '2018-07-14', '905P', 'DANNY LARA', 'NEGRO', 'NEGRO', 'NEGRO', 15, 1, 'CORTADO', 1, '2018-07-14', NULL, '0000-00-00', NULL, '0000-00-00', NULL, '0000-00-00', NULL, '0000-00-00', NULL, '0000-00-00', NULL, '0000-00-00'),
(5453, 'DAMA', '2018-07-14', '905P', 'DANNY LARA', 'NEGRO', 'NEGRO', 'NEGRO', 15, 1, 'COMPLETADO', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14'),
(5555, 'DAMA', '2018-07-13', '905P', 'DANNY LARA', 'NEGRO', 'NEGRO', 'NEGRO', 15, 1, 'COSTUREADO', 1, '2018-07-13', 1, '2018-07-13', 1, '2018-07-13', NULL, '0000-00-00', NULL, '0000-00-00', NULL, '0000-00-00', NULL, '0000-00-00'),
(6666, 'DAMA', '2018-07-13', '905P', 'DANNY LARA', 'NEGRO', 'NEGRO', 'NEGRO', 15, 1, 'COMPLETADO', 1, '2018-07-13', 1, '2018-07-13', 1, '2018-07-13', 1, '2018-07-13', 1, '2018-07-13', 1, '2018-07-13', 1, '2018-07-13'),
(7777, 'DAMA', '2018-07-14', '905P', 'DANNY LARA', 'NEGRO', 'NEGRO', 'NEGRO', 15, 1, 'COMPLETADO', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', NULL, '0000-00-00'),
(8885, 'DAMA', '2018-07-14', '905P', 'DANNY LARA', 'NEGRO', 'NEGRO', 'NEGRO', 15, 1, 'COMPLETADO', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14', 1, '2018-07-14');

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
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`cedula`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
