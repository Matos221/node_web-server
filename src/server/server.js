// Aqui importamos "express", para usar sus funcionalidades y "path"
const express = require('express')
const path = require('path')

// Creamos la funcion para iniciar el servidor que correra nuestra web
const startServer = (options) => {
        const { port, public_path = 'public' } = options

        const app = express()

        // Para poder usar los "middlewares", se empieza con ".use"
        app.use(express.static(public_path)) // Contenido estatico que ponemos disponible

        // Ahora crearemos la funcion (aplicando callbacks), para cuando nos hagan una peticion "get" a nuestro servidor. Importante marcas que la funcion "join" de Node, nos da la posibilidad de viajar entre archivos. Para eso hay que salir del que estamos y movernos a los otros => `../../../${public_path}/index.html`.

        app.get('*', (req, res)  => { // Con '*' marcamos que ante cualquier pedido url al server, enviaremos como res (respuesta), el "index.html"
                const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
                res.sendFile(indexPath);
        }) 

        // Con "listen" creamos un puerto que queda a la escucha de una llamada por "url" en el navegador, que devolvera la pagina, como respuesta.
        app.listen(port, () => {
                console.log('Escuchando en el puerto', port)
        })
}

// Exportamos la funcion

module.exports = {
        startServer
}