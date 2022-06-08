"use strict";

var socket = io();
var divChat = document.querySelector('#chat');
var boton = document.querySelector('#enviar');
var respuesta = document.querySelector('#warning');
var btnGuardar = document.querySelector('#guardar');
var body = document.querySelector('#table-body');
boton.addEventListener("click", function (event) {
  respuesta.innerHTML = " ";
  var usuario = document.querySelector('#user').value;

  if (/(.+)@(.+){2,}\.(.+){2,}/.test(usuario)) {
    var mensaje = document.querySelector('#texto').value;
    var message = {
      autor: usuario,
      hora: new Date().toLocaleString(),
      texto: mensaje
    };
    socket.emit('newMessage', message);
  } else {
    respuesta.innerHTML = "Debe ingresar un mail";
  }
});
btnGuardar.addEventListener("click", function (event) {
  var title = document.querySelector('#title').value;
  var price = document.querySelector('#price').value;
  var image = document.querySelector('#image').value;

  if (title !== '' && price !== '' && image !== '') {
    var producto = {
      "title": title,
      "price": price,
      "image": image
    };
    socket.emit('product', producto);
  }
});
socket.on('messages', function (messages) {
  divChat.innerHTML = messages.map(function (message) {
    return "<div>\n            <span style=\"color:blue; font-weight: bold;\">".concat(message.autor, "</span>\n            <span style=\"color:brown\">").concat(message.hora, "</span>\n            <span style=\"color:green; font-style: italic;\">").concat(message.texto, "</span>\n            </div>\n            ");
  }).join(" ");
});
socket.on('newMessages', function (messages) {
  divChat.innerHTML = messages.map(function (message) {
    return "<div>\n            <span style=\"color:blue; font-weight: bold;\">".concat(message.autor, "</span>\n            <span style=\"color:brown\">").concat(message.hora, "</span>\n            <span style=\"color:green; font-style: italic;\">").concat(message.texto, "</span>\n            </div>\n            ");
  }).join(" ");
});
socket.on('newProduct', function (products) {
  body.innerHTML = " ";
  body.innerHTML = products.map(function (products) {
    return "<tr>\n                <td class=\"table-info\">".concat(products.id, "</td>\n                <td class=\"table-info\">").concat(products.title, "</td>\n                <td class=\"table-info\">").concat(products.price, "</td>\n                <td class=\"table-info\"><img src=").concat(products.image, " alt=\"No image\" width=\"20px\"/></td>\n            </tr>\n            ");
  }).join(" ");
});
