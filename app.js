const express = require('express');
const rutasHome = require('./routes/productos.js')
const app = express();

// app.use('static', express.static(__dirname + '/public'));mas recomendada la de abajo
app.use(express.static('public'));

// app.listen(3000, () => {
//     console.log('Servidor corriendo en puerto 3000')
// });

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
  });

 app.use('/',rutasHome)






  
