// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
// const _get = require("lodash.get");

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(fileUpload());

// app.all("/", (req, res) => {
//   let respuesta = {};

//   respuesta.body = req.body;
//   respuesta.params = req.params;
//   respuesta.query = req.query;
//   respuesta.headers = req.headers;
//   respuesta.files = req.files;
//   respuesta.file = req.file;
//   respuesta.ip = req.ip || req.ips;

//   console.log({ respuesta });

//   const archivo = _get(req, "files.archivo", null);

//   if (!!archivo) {
//     archivo.mv(`./files/${archivo.name}`, function (err) {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       res.status(200).json(respuesta);
//     });
//   } else {
//     res.status(200).json(respuesta);
//   }
// });

// app.listen(3000, () => {
//   console.log("app corriendo en el puerto 3000");
// });

// class Estudiante {
//   constructor(nombre, apellido, edad, grado, colegio){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.grado = grado;
//     this.colegio = colegio;
//   }
// }

// function ingresos() {
//   const primero = prompt('ingrese el nombre del personaje');
//   const segundo = prompt('ingrese el apellido del personaje');
//   const tercero = prompt('ingrese la edad del personaje');
//   const cuarto = prompt('ingrese el grado de estudio del personaje');
//   const quinto = prompt('ingrese el nombre del colegio del personaje');
//   datos.push(new Estudiante (primero, segundo, tercero, cuarto, quinto));
// }

// var datos = [];

// ingresos();

// console.log (datos)

