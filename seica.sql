-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-07-2018 a las 21:38:25
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
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`cedula`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
